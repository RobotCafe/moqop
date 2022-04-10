'use strict';
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
const url = require('url');

const crypto = require("crypto");


exports.get = async function(req,res) {

  function getcookie(req) {
    var cookie = req.headers.cookie;
    return cookie.split(';').reduce((res,item) => { 
      const data = item.trim().split('='); 
      return { 
        ...res, [data[0]] : data[1] 
      }; 
    }, {}); 
  } 

  const userSessionId = getcookie(req).mokopioSession
  console.log(userSessionId)
  
  const user = db.collection('users').doc(userSessionId);
  const doc = await user.get();
  if (!doc.exists) {
    res.send({
      message: {
        error: 'User not exist. Log in please'
      }
    })
    console.log('No such user!');
  } else {
    console.log('user data:', doc.data());
    res.send({
      message: {
        user: 'User exist'
      }
    })
  }
}

exports.set = async function(req,res) {

  const queryObject = url.parse(req.url, true).query;
  console.log('queryObject');
  console.log(queryObject.code);

  function generateId() {
    const id = crypto.randomBytes(32).toString("hex");
    return id;
  } 
  const userId = generateId();
  const oneYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  console.log(oneYear)
  console.log(userId);
  res.cookie(`mokopioSession`,userId,{
    expires: oneYear,
    // secure: true,
    httpOnly: true,
    sameSite: 'lax'
  });
  
  const usersRef = db.collection('users');
  await usersRef.doc(userId).set({
    access_token: generateId(), 
    refresh_token: generateId()
  });

  res.send('Cookie have been saved successfully'); 
}
exports.delete = async function(req,res) {
  res.clearCookie()
  res.send('Cookie has been deleted successfully');
}