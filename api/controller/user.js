'use strict';
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
const crypto = require("crypto");


async function isUser(userSessionId) {
  // console.log('doc: '+userSessionId)
  const user = await db.collection('users').doc(userSessionId)
  const doc = await user.get();
  if (!doc.exists) {
    console.log('User does not exist')
    return false
  } else {
    console.log('User exists')
    return true
  }
}

function generateId() {
  const id = crypto.randomBytes(32).toString("hex");
  return id;
} 

function oneYearAhead(){ 
  const dayNextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  return dayNextYear
}

function getcookie(req) {
  if (req.headers.cookie) {
    var cookie = req.headers.cookie;
    return cookie.split(';').reduce((res,item) => { 
      const data = item.trim().split('='); 
      return { 
        ...res, [data[0]] : data[1] 
      }; 
    }, {}); 
  } else {
    return {mokopioSession: 'false'}
  }
} 

exports.get = async function(req,res) {

  const user = await getcookie(req).mokopioSession
  console.log(user)
  if (isUser(user)) {
    res.send({message: {user: 'User exists'}})
  } else {
    res.send({message: {error: 'User does not exist'}})
  }

  
  // const user = db.collection('users').doc(userSessionId);
  // const doc = await user.get();
  // if (!doc.exists) {
  //   res.send({
  //     message: {
  //       error: 'User not exist. Log in please'
  //     }
  //   })
  //   console.log('No such user!');
  // } else {
  //   console.log('user data:', doc.data());
  //   res.send({
  //     message: {
  //       user: 'User exist'
  //     }
  //   })
  // }
  // refreshToken()
}

async function refreshToken(sessionID) {
  console.log(sessionID);
  // return res.send(`Fetched activity from strava: ${sessionID}`);
  
  const entries = await db.collection('users').get()
  
  let [{access_token, refresh_token}] = await entries.docs.map(entry => entry.data())
  console.log('tokens: ' + access_token, refresh_token)
  console.log('Request – Refresh token')
  const resToken = await fetch(
    `https://www.strava.com/api/v3/oauth/token?client_id=${process.env.CLIENT_ID_STRAVA}&client_secret=${process.env.CLIENT_SECRET_STRAVA}&grant_type=refresh_token&refresh_token=${refresh_token}`,
    {
      method: 'POST',
    },
  )
  .then(response => (response.json()))
  .then(dataAuth => {
    console.log('dataAuth')
    console.log(dataAuth)
    console.log('Request - Activity')
    fetch(
      // 'https://www.strava.com/api/v3/athletes/42409445/stats',
      // `https://www.strava.com/api/v3/activities/${sessionID}`,
      'https://www.strava.com/api/v3/athlete',
      {
        method: 'GET',
        'Content-Type': 'application/json', 
        headers: {
          Authorization: `Bearer ${dataAuth.access_token}`,
        },
      },
    )
    .then(
      response => (response.json())
    )
    .then(dataActivity => {
      console.log(dataActivity)
        const {
          access_token: newToken,
          refresh_token: newRefreshToken,
        } = dataAuth

        
        console.log('New tokens: ' + access_token, refresh_token)
        db.collection('users')
          .doc(sessionID)
          .update({
              access_token: newToken,
              refresh_token: newRefreshToken,
            })
    })
  })

}

exports.set = async function(req,res) {
  const user = getcookie(req).mokopioSession
  console.log(`Cookie ID: ${user}`);

  const checkUser = await isUser(user)

  if(checkUser){
    console.log(checkUser)
    res.send({message: {user: 'User exist'}})
  } else {
    const userId = generateId();
    console.log(oneYearAhead())
    console.log(userId);
    res.cookie(`mokopioSession`,userId,{
      expires: oneYearAhead(),
      secure: true,
      httpOnly: true,
      sameSite: 'lax'
    });
    
    console.log('to here')
    const usersRef = db.collection('users');
    await usersRef.doc(userId).set({
      access_token: generateId(), 
      refresh_token: generateId()
    });
  
    res.send('Cookie have been saved successfully'); 
  }

}
exports.delete = async function(req,res) {
  res.clearCookie()
  res.send('Cookie has been deleted successfully');
}