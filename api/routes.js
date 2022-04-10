'use strict';
module.exports = function(app) {
  var strava   = require('./controller/strava');
  var render   = require('./controller/render');
  var user   = require('./controller/user');

  // Static Pages
  app.route('/api/strava/:id').get(strava.activity);
  app.route('/api/render/strava-one/:id').get(render.stravaOne);
  
  // Cookies
  app.route('/api/cookie/get').get(user.get);
  app.route('/api/cookie/set').get(user.set);
  app.route('/api/cookie/delete').get(user.delete);

};