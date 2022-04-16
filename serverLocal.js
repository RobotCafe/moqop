const express = require('express')
const next = require('next')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var routes = require('./api/routes');
var passport = require('passport');
var util = require('util');

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
const app = next({ dev })
const handle = app.getRequestHandler()
var STRAVA_CLIENT_ID = '80214';
var STRAVA_CLIENT_SECRET = '25b8bfd5d74d1ed03eee1acb88f3ff664fdcc346';

console.log(STRAVA_CLIENT_ID);
console.log(STRAVA_CLIENT_SECRET)

passport.serializeUser(async function(user, done) {
  console.log('serialize: ' + user._json.id)
  console.log(user._json.id)
  console.log(user._json)

  console.log('serializeUser')
  var userIdString = String(user._json.id)
  console.log(userIdString)
  user._json.token = user.token
  const res = await db.collection('users').doc(userIdString).set(user._json);
  
  console.log(res)
  console.log('serializeUser')
  done(null, user);
});

passport.deserializeUser(async function(obj, done) {
  console.log('deserialize')
  console.log(obj._json)
  var userIdString = String(obj._json.id)

  const user = await db.collection('users').doc(userIdString)
  const doc = await user.get();
  if (!doc.exists) {
    console.log('User does not exist')
    return false
  } else {
    console.log('User exists')
    done(null, obj);
    return (doc.data())
  }


});
passport.use(new StravaStrategy({
  clientID: STRAVA_CLIENT_ID,
  clientSecret: STRAVA_CLIENT_SECRET,
  callbackURL: "http://localhost:8000/auth/strava/callback"
},
function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    console.log('next tick')
    console.log(accessToken, refreshToken)
    console.log(profile._json)
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
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      //cookie: { secure: true } remove this line for HTTP connection
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




function ensureAuthenticated(req, res, next) {
  console.log(req._passport.session.user);
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

// var express 	= require('express'),
// 	app 				= require('express')(),
// 	http 				= require('http').Server(app),
//   path 				= require('path'),
//   port 				= process.env.PORT || 8000,
//   // mustacheExpress = require('mustache-express'),
//   bodyParser 	= require('body-parser');
//   // cookieSession = require('cookie-session');
//   global.__basedir = __dirname;

// app.use(bodyParser.urlencoded({limit: '20mb', extended: true }));
// app.use(bodyParser.json({limit: '20mb', extended: true}));

// // app.engine('html', mustacheExpress());
// app.set('view engine', 'html');
// app.set('views', __dirname + '/dist/');

// app.use('/assets', express.static('assets'))

// // app.use(cookieSession({
// //   name: 'moqop-session',
// //   keys: ['key1', 'key2'],

// //   // Cookie Options
// //   maxAge: 24 * 60 * 60 * 1000 * 365 // 1year
// // }))

// var publicPath = path.resolve(__dirname, './src');
// var routes = require('./api/routes');

// app.use(express.static(publicPath));
// routes(app);

// http.listen(port, function(){
//   console.log('listening on *:8000');
// });
