'use strict';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// var firebaseConfig = require('../utils/firebase')
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('../utils/firebase.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// const db = require('../utils/firebase');

exports.activity = async function(req,res) {

  // console.log('asdf')
  // const options = {
  //   clientId: 80214,
  //   clientSecret: '25b8bfd5d74d1ed03eee1acb88f3ff664fdcc346',
  //   scope: 'write',
  //   httpPort: 3001
  // };
  // const callback = (error, accessToken) => {
  //   console.log('asdf')
  //   if (error) {
  //     console.error('Failed: ', error);
  //     res.json(error);
  //   } else {
  //     console.log('Access token: ', accessToken);
  //     res.json(accessToken);
  //   }
  //   res('asdf');
  // };
  // authorize(options, callback);




  console.log(req.params.id);
  // return res.send(`Fetched activity from strava: ${req.params.id}`);
  

  const entries = await db.collection('access_tokens').get()
  // console.log(entries);
  let [{access_token, refresh_token}] = await entries.docs.map(entry => entry.data())
  const resToken = await fetch(
    `https://www.strava.com/api/v3/oauth/token?client_id=${process.env.CLIENT_ID_STRAVA}&client_secret=${process.env.CLIENT_SECRET_STRAVA}&grant_type=refresh_token&refresh_token=${refresh_token}`,
    {
      method: 'POST',
    },
  )
  const {
    access_token: newToken,
    refresh_token: newRefreshToken,
  } = await resToken.json()

  const resStats = await fetch(
    // 'https://www.strava.com/api/v3/athletes/42409445/stats',
    // `https://www.strava.com/api/v3/activities/${event}`,
    'https://www.strava.com/api/v3/athlete',
    {
      method: 'GET',
      'Content-Type': 'application/json', 
      headers: {
        Authorization: `Bearer ${resToken.access_token}`,
      },
    },
  )
  .then(
    response => {
      console.log(response.json())
      return res.send(response);
      // setActivityData(response)
    }
  )
  .then(data => {
      console.log(data)
      return res.send(data);
      // setActivityData(data)
  })

  console.log('tokens: ' + access_token, refresh_token)
  db.collection('access_tokens')
    .doc('92x9OctuhXthN1dmsW4z')
    .update({
        access_token: newToken,
        refresh_token: newRefreshToken,
      })


  // return res.send(`Fetched activity from strava: ${req.params.id}`);
}

// exports.stravaItem = function(req,res) {
// 	console.log(req);
//   return res.send('fetched activity from strava' + req.query.id);
// }



    // const resStats = await fetch(
    //   // 'https://www.strava.com/api/v3/athletes/42409445/stats',
    //   // `https://www.strava.com/api/v3/activities/${event}`,
    //   'https://www.strava.com/api/v3/athlete',
    //   {
    //     method: 'GET',
    //     'Content-Type': 'application/json', 
    //     headers: {
    //       Authorization: `Bearer ${props.test.logs.new_token}`,
    //     },
    //   },
    // )
    // .then(
    //   response => (
    //     console.log(response.json()),
    //     // setActivityData(response)
    //   )
    // )
    // .then(data => {
    //     console.log(data)
    //     setActivityData(data)
    // })


    // var activityData = await resStats.json()