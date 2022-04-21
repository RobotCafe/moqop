'use strict';
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
const crypto = require("crypto");


exports.account = async function(req, res) {
  res.send(req._passport.session.user._json);
}

exports.user = async function(req, res) {
  if (req.isAuthenticated()) { 
    // return next(); 
    res.send(req._passport.session.user._json);
  } else {
    return res.status(400).send({
      message: 'User is not logged in!'
    });
  }
  // res.redirect('/auth/strava/')
}

exports.test = async function(req, res) {
    res.send(req._passport.session.user);
}

exports.strava = async function(req, res) {
  console.log('The request will be redirected to Strava for authentication, so this')
}

exports.callback = async function(req, res) {

  
  console.log(req._passport.session.user._json)
  var user = req._passport.session.user._json
  console.log('user.id')
  console.log(user.id)
  console.log('user')
  console.log(user)
  // const response = await db.collection('users').doc(user.id).set(req._passport.session.user._json);

  const usersRef = db.collection('users');
  const response = await usersRef.doc(String(user.id)).set(user);
  // const res = await db.collection('users').doc(userIdString).set(user._json);
  
  return req.session.save((err) => {
    console.log(err);
    res.redirect('/')
    // res.redirect('/account/')
  });
  // return res.send(req._passport.session.user);
}

exports.logout = async function(req, res) {
  req.logout();
  res.redirect('/');
}