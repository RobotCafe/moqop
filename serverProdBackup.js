const express = require('express')
const next = require('next')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var routes = require('./api/routes');
var passport = require('passport');

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./api/utils/firebase.json');

initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();
var StravaStrategy = require('passport-strava-oauth2').Strategy;

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
// const server = dev ? 'http://localhost:8000' : 'https://strava-story.vercel.app';
const server = dev ? 'http://192.168.0.182:8000' : 'https://moqop.com';
const app = next({ dev })
const handle = app.getRequestHandler()
var STRAVA_CLIENT_ID = '80214';
var STRAVA_CLIENT_SECRET = '25b8bfd5d74d1ed03eee1acb88f3ff664fdcc346';

passport.serializeUser(async function(user, done) {
  var userIdString = String(user._json.id)
  user._json.token = user.token
  console.log('user._json.id ' + user._json.id)

  let document = await db.collection("users").doc(userIdString).get();
  if (document && document.exists) {
    // console.log('document exists')
    console.log(document)
    if (!document.data().moqop || !document.data().moqop.created_at) {
      var moqop_created_at = '2022-04-22T10:00:00Z'
    } else {
      var moqop_created_at = document.data().moqop.created_at
    }
    if (!document.data().moqop || !document.data().moqop.login_count) {
      var moqop_signup_count = 1
    } else {
      var moqop_signup_count = document.data().moqop.login_count + 1
    }
    user._json.moqop = {
      created_at: moqop_created_at,
      updated_at: new Date().toISOString(),
      login_count: moqop_signup_count
    }
    await document.ref.update(user._json)
  } else {
    user._json.moqop = {
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      login_count: 1
    }
    await db.collection('users').doc(userIdString).set(user._json);
  }

  done(null, user);
});

passport.deserializeUser(async function(obj, done) {
  var userIdString = String(obj._json.id)
  const user = await db.collection('users').doc(userIdString)
  const doc = await user.get();
  if (!doc.exists) {
    console.log('User does not exist')
    return false
  } else {
    // console.log('User exists')
    done(null, obj);
    return (doc.data())
  }
  done(null, obj);
});

passport.use(new StravaStrategy({
  clientID: STRAVA_CLIENT_ID,
  clientSecret: STRAVA_CLIENT_SECRET,
  callbackURL: `${server}/auth/strava/callback`
},
function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    console.log('next tick')
    console.log(accessToken, refreshToken)
    // console.log(profile._json)
    // To keep the example simple, the user's Strava profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the Strava account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}
));


app.prepare().then(() => {
  const server = express()
  
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json()) // parse application/json

  server.set('trust proxy', 1) // trust first proxy
  server.use(session({
    secret: 'f3f476826e0e83ae8e9a98c5e1db2e89a59927d909f425f5f28d17b4520fa65d',
    resave: false,
    saveUninitialized: true, //cookie: { secure: true } remove this line for HTTP connection
  }))
  server.use(passport.initialize());
  server.use(passport.session());

  routes(server); 
  
  server.all('*', (req, res) => {
    return handle(req, res)
  })
  
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})