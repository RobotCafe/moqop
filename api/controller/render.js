// const express = require('express');
// const router = express.Router();
const nodeHtmlToImage = require('node-html-to-image');
var Canvas = require('canvas');
const polyline = require("@mapbox/polyline");
const font = require('../fonts/roboto.js');
const fontRoboto = font.roboto;
const {toFixedIfNecessary, formatSeconds, server, hdImage, formatPace} = require('../utils/functions')


exports.stravaOne = async function(req,res) {

  if (req.isAuthenticated()) { 
    console.log('req.user: ' + req._passport.session.user)
    console.log('req.user.token: ' + req._passport.session.user.token)
    var access_token = req._passport.session.user.token
    // console.log(req)

    // OLD: Fetch strava data
    // urlStravaData = `${server()}/api/strava/${req.params.id}`
    // var stravaData = await fetch(urlStravaData)
    //   .then(response => response.json())
    //   .then(data => {
    //     // console.log(data)
    //     return data
    //   })

    var stravaData = await fetch(
        // 'https://www.strava.com/api/v3/athletes/42409445/stats',
        `https://www.strava.com/api/v3/activities/${req.params.id}`,
        // 'https://www.strava.com/api/v3/athlete',
        {
          method: 'GET',
          'Content-Type': 'application/json', 
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      ).then(
        response => (response.json())
      ).then(dataActivity => {
        console.log('Fetch - activity data')
        return dataActivity
      })
    
      if ((stravaData.photos === undefined) || (stravaData.photos.count === undefined) || (stravaData.photos.count === 0)) {
        var stravaPicture = false
        // return false
      } else {
        var stravaPicture = hdImage(stravaData.photos.primary.urls[600])
      }
    var mapPolyline = stravaData.map.polyline

    // Render canvas
    function renderCanvas() {
      var Image = Canvas.Image;
      var canvas = Canvas.createCanvas(1000, 1300);
      var context = canvas.getContext('2d');
      let arr = polyline.decode(mapPolyline);

      context.clearRect(0, 0, canvas.width, canvas.height);
      var minX, minY, maxX, maxY;
      var firstPoint = [0,0]
      arr.forEach((p, i) => {
        if (i === 0) {
          // if first point
          minX = maxX = p[1];
          minY = maxY = p[0];
        } else {
          minX = Math.min(p[1], minX);
          minY = Math.min(p[0], minY);
          maxX = Math.max(p[1], maxX);
          maxY = Math.max(p[0], maxY);
        }
      });

      // console.log(minX, minY, maxX, maxY)

      // now get the map width and heigth in its local coords
      const mapWidth = maxX - minX;
      const mapHeight = maxY - minY;
      const mapCenterX = (maxX + minX) / 2;
      const mapCenterY = (maxY + minY) / 2;

      // console.log(mapWidth, mapHeight, mapCenterX, mapCenterY)

      // to find the scale that will fit the canvas get the min scale to fit height or width
      const scale = Math.min(canvas.width / mapWidth, canvas.height / mapHeight) * 0.9;

      // Now you can draw the map centered on the cavas
      context.beginPath();
      // console.log(arr[0][0]);
      
      arr.forEach((p, i) => {
        if (i === 0) {
          firstPoint[0] = (p[1] - mapCenterX) * scale + canvas.width / 2
          firstPoint[1] = (p[0] - mapCenterY) * -scale + canvas.height / 2
        }
        context.lineTo(
          (p[1] - mapCenterX) * scale + canvas.width / 2,
          (p[0] - mapCenterY) * -scale + canvas.height / 2
        );
      });

      // TODO - make it rounded
      // https://stackoverflow.com/questions/29074956/in-mapbox-js-how-to-smooth-a-polyline

      context.lineWidth = 8;
      context.strokeStyle = 'white';
      context.lineJoin = "round";
      context.lineCap = 'round',
      context.stroke();

      const radius = 15;
      const x = firstPoint[0]
      const y = firstPoint[1]
      context.beginPath();
      // console.log('radius: ' + radius)
    
      // Clearing circle
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.clip()
      context.clearRect(x - radius, y-radius, x + radius*2, y + radius*2);
      // console.log('firstPoint: ' + firstPoint)
      
      // Starting point circle
      context.beginPath();
      context.lineWidth = 16;
      context.strokeStyle = 'white';
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      // console.log('radius: ' + radius)
      context.stroke();

      // save canvas image as data url (png format by default)
      return canvas.toDataURL();
    }

    function stats() {
      var distance = `${toFixedIfNecessary(stravaData.distance/1000, 2)} km`
      var content = `
        <div>
          <div class="title">${stravaData.type}</div>
          <div class="value">${distance}</div>
        </div>
        ${
          stravaData.total_elevation_gain > 100 ? 
            `<div>
              <div class="title">Elev Gain</div>
              <div class="value">${stravaData.total_elevation_gain} m</div>
            </div>`
           : 
            `<div>
              <div class="title">Pace</div>
              <div class="value">${formatPace(stravaData.moving_time, stravaData.distance)}</div>
            </div>`
          
        }
        <div>
          <div class="title">Time</div>
          <div class="value">${formatSeconds(stravaData.moving_time)}</div>
        </div>
      `
      return content
    }



  // console.log(stats())

    const output = (`
    
      <html>
        <head>
          <link rel="icon" href="${server()}/images/favicon.png"/>
          <style>
            ${fontRoboto()}
            html {
              width: 1080px;
              height: 1920px;
              font-size: 20px;
              font-family: "Roboto";
              padding: 0;
              margin: 0;
            }
            body {
              font-size: 2rem;
              color: #fff;
              padding: 0;
              margin: 0;
            }
            .stats {
              position: absolute; 
              z-index: 10; 
              bottom: 8rem; 
              width:100%; 
              display:flex; 
              justify-content: 
              center; 
              gap: 3.5rem;
            }
            .value {
              font-size: 3rem;
              margin-top: 0.5rem;
            }
            .title {
              max-width: 15rem;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .picture {
              position: absolute; 
              z-index: 8;
              left: 0;
              top: 0;
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
            .gradient {
              position: absolute;
              z-index: 9;
              left:0;
              top: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(180deg, rgba(58, 63, 75, 0.8) 0%, rgba(34, 53, 74, 0) 45.25%, rgba(161, 115, 76, 0) 58.79%, rgba(75, 54, 36, 0.8) 98.9%);
            }
            .solid {
              position: absolute;
              z-index: 9;
              left:0;
              top: 0;
              width: 100%;
              height: 100%;
              background: #38424B;
            }
            .canvas {
              position: absolute;
              z-index: 9;
              left:50%;
              top: 50%;
              width: 1000px;
              height: 1300px;
              transform: translate(-50%, -55%);
            }
            .watermark {
              position: absolute;
              top: 2.9rem;
              right: 5.5rem;
              font-size: 2rem;
              z-index: 1000;
              opacity: 0.5;
            }
          </style>
        </head>
        <body>
          <div style="position:relative; width: 100%; height: 100%;">
            <div class="watermark">moqop</div>
            <div class="stats">
              ${stats()}
            </div>
            ${stravaPicture ? 
              `
              <div class="gradient"></div>
              <img src=${stravaPicture} class="picture" />
              `
            : '<div class="solid"></div>'}
            <img src="${renderCanvas()}" class="canvas" />
          </div>
          <script>
          
          </script>
        </body>
      </html>
    
    `)

    if (req.query.type === 'html') {
      console.log(stravaData)
      res.send(output)
    } else {
      //Render image and send to front-end
      const puppeteer = { args: [ '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-accelerated-2d-canvas', '--no-first-run', '--headless', '--no-zygote', '--disable-gpu' ], headless: true, ignoreHTTPSErrors: true };
      const image = await nodeHtmlToImage({
        html: output,
        puppeteerArgs: puppeteer,
        defaultViewport: {
          width: 1080,
          height: 1920
        }
      });
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(image, 'binary');
    }

  } else {
    return res.status(400).send({
      message: 'User is not logged in!'
    });
  }
}