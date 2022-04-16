'use strict';
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
const crypto = require("crypto");


exports.account = async function(req, res) {
// server.get('/account', ensureAuthenticated, function(req, res){
  // res.render('account', { user: req.user });
  res.send(req._passport.session.user._json);
// });
}

exports.test = async function(req, res) {
// server.get('/test', 
  // passport.authenticate('strava'),
  // function(req, res){
    res.send(req._passport.session.user);
}

exports.strava = async function(req, res) {
// server.get('/auth/strava',
  // passport.authenticate('strava', { scope: ['activity:read_all'] }),
  // function(req, res){
    console.log('The request will be redirected to Strava for authentication, so this')
    // The request will be redirected to Strava for authentication, so this
    // function will not be called.
  // });
}

  exports.callback = async function(req, res) {
  // server.get('/auth/strava/callback', 
    // passport.authenticate('strava', { failureRedirect: '/login' }),
    // function(req, res) {

      return req.session.save((err) => {
        console.log(err);
        // res.send({ message :`ok` })
        res.redirect('/account/')
      });

      // console.log(req._passport.session.user._json)
      // console.log(res)
      return res.send(req._passport.session.user);
      // res.redirect('/');
    // });
  }
  
    exports.logout = async function(req, res) {
      // server.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
      // });
    }
    


// server.all('*', (req, res) => {
//   return handle(req, res)
// })


// const user = await db.collection('users').doc(userSessionId)
// const doc = await user.get();
// if (!doc.exists) {
//   console.log('User does not exist')
//   return false
// } else {
//   console.log('User exists')
//   return (doc.data())
// }