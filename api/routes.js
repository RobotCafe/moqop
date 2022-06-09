'use strict';
var passport = require('passport');

module.exports = function(app) {
  // var strava   = require('./controller/strava'); obsolete

  var render   = require('./controller/render');
  var shot   = require('./controller/shot');
  
  // var user   = require('./controller/user');
  var auth   = require('./controller/auth');
  var open   = require('./controller/open');
  var activity   = require('./controller/activity');
  var project   = require('./controller/project');
  

  // Render shots
  // app.route('/api/strava/:id').get(strava.activity); obsolete
  app.route('/api/render/:id').get(render.stravaOne);
  app.route('/api/shot/').get(shot.render);


  
  // Open startup metrics
  app.route('/api/open/users').get(open.usersCount);
  app.route('/api/open/shots').get(open.shotsCount);
  app.route('/api/open/saveShot').post(open.saveShot);
  
  // Editor
  app.route('/api/project').get(project.getData);
  
  // Cookies
  // app.route('/api/cookie/get').get(user.get);
  // app.route('/api/cookie/set').get(user.set);
  // app.route('/api/cookie/delete').get(user.delete);
  
  // Authentification
  app.route('/account').get(ensureAuthenticated, auth.account)
  app.route('/api/user').get(auth.user)
  app.route('/test').get(passport.authenticate('strava'), auth.test)
  app.route('/auth/strava').get(passport.authenticate('strava', { scope: ['activity:read_all'] }), auth.strava)
  app.route('/auth/strava/callback').get(passport.authenticate('strava', { failureRedirect: '/' }), auth.callback)
  app.route('/logout').get(auth.logout)
  // app.route('/api/render/strava-one/:id').get(passport.authenticate('strava', { failureRedirect: '/login' }),render.stravaOne);
  
  app.route('/api/activity').get(activity.getAll)
};


function ensureAuthenticated(req, res, next) {
  // console.log('req._passport.session.user');
  // console.log(req._passport.session.user);
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/auth/strava/')
}