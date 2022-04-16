'use strict';
var passport = require('passport');

module.exports = function(app) {
  var strava   = require('./controller/strava');
  var render   = require('./controller/render');
  var user   = require('./controller/user');
  var auth   = require('./controller/auth');
  var activity   = require('./controller/activity');

  // Static Pages
  app.route('/api/strava/:id').get(strava.activity);
  app.route('/api/render/strava-one/:id').get(render.stravaOne);
  
  // Cookies
  app.route('/api/cookie/get').get(user.get);
  app.route('/api/cookie/set').get(user.set);
  app.route('/api/cookie/delete').get(user.delete);

  // Authentification
  app.route('/account').get(ensureAuthenticated, auth.account)
  app.route('/test').get(passport.authenticate('strava'), auth.test)
  app.route('/auth/strava').get(passport.authenticate('strava', { scope: ['activity:read_all'] }), auth.strava)
  app.route('/auth/strava/callback').get(passport.authenticate('strava', { failureRedirect: '/login' }), auth.callback)
  app.route('/logout').get(auth.logout)
  
  
  app.route('/api/activity').get(activity.getAll)


  
};


function ensureAuthenticated(req, res, next) {
  console.log('req._passport.session.user');
  console.log(req._passport.session.user);
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/auth/strava/')
}