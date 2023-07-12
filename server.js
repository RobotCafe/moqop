const express = require('express')
const next = require('next')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var routes = require('./api/routes');
var passport = require('passport');
require('dotenv').config();


const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const serviceAccount = require('./api/utils/firebase.json');
const serviceAccount = {
  "type": "service_account",
  "project_id": "mokop-io",
  "private_key_id": process.env.PRIVATE_KEY_ID,
  "private_key": process.env.PRIVATE_KEY,
  "client_email": process.env.CLIENT_EMAIL,
  "client_id": process.env.CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
};

initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();
var StravaStrategy = require('passport-strava-oauth2').Strategy;

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const server = dev ? 'http://localhost:8000' : 'https://moqop.com';
const STRAVA_CLIENT_ID = dev ? process.env.LOCAL_CLIENT_ID_STRAVA : process.env.CLIENT_ID_STRAVA;
const STRAVA_CLIENT_SECRET = dev ? process.env.LOCAL_CLIENT_SECRET_STRAVA : process.env.CLIENT_SECRET_STRAVA;

const app = next({ dev })
const handle = app.getRequestHandler()

passport.serializeUser(async function(user, done) {
  var userIdString = String(user._json.id)
  user._json.token = user.token
  console.log('user._json.id ' + user._json.id)

  let document = await db.collection("users").doc(userIdString).get();
  if (document && document.exists) {
    console.log('user exists in firebase')
    // console.log(document)
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
    
    // Send webhook request
    var discordUrl = `https://discord.com/api/webhooks/970994761437683784/YfYoqdrYgzXs5K1LOzbZDLHzMEFMCbLUoOREzNG8hzCBoVGqmMzQlX1UYpim0F6kkTcj`
    var params = {
      username: "moqop · user",
      content: `${user._json.firstname} ${user._json.lastname} · ${user._json.username} · https://strava.com/athletes/${user._json.id}`
    }
    fetch(discordUrl, {
      method: "POST",
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
        console.log(res);
    }) 
    
  }

  done(null, user);
});

passport.deserializeUser(async function(obj, done) {
  var userIdString = String(obj._json.id)
  const user = await db.collection('users').doc(userIdString)
  const doc = await user.get();
  if (!doc.exists) {
    console.log('User does not exist')
    done(null, obj);
    return false
  } else {
    // console.log('User exists')
    done(null, obj);
    return (doc.data())
  }
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