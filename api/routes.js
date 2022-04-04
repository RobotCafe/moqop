'use strict';
module.exports = function(app) {
  // var page   = require('./controller/page');
  var strava   = require('./controller/strava');
  // var dynamicPages   = require('./controller/dynamic');

// app.get('/', function(req, res){    
//     res.sendFile(__dirname + '/dist/index.html');
// });

// app.get('/strava', function(req, res) {
//   // var url = req.url
//   // url = url.replace('/mockup/','/3d-mockup/');
//   // res.redirect(301, url);
//     res.send('stravaa');
// });


// app.route('/strava', function(req,res) {
//   res.render('stravaa');
// })

  // Static Pages
  app.route('/api/strava/:id').get(strava.activity);
  // app.route('/request').get(staticPages.request);
  // app.route('/sell').get(staticPages.sell);
  // app.route('/terms-of-use').get(staticPages.termsOfUse);
  // app.route('/privacy-policy').get(staticPages.privacyPolicy);
  // app.route('/updates').get(staticPages.updates);
  // app.route('/publish').get(staticPages.publish);

  
  // app.route('/api/strava/')
  //   .get(page.strava);
  
  // app.route('/api/strava/:id')
  //   // .post(like.create)
  //   .get(page.stravaItem);
  
  // Get Users
  // app.route('/@:username').get(profile.user);

  // app.get('*', function(req, res){
  //   res.status(404).render('static/404', {please: "asdf"});
  // });

};