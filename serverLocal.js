const express = require('express')
const next = require('next')
require('trace-unhandled/register');

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  
  var routes = require('./api/routes');
  routes(server); 
  
    server.all('*', (req, res) => {
      return handle(req, res)
    })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})


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
