// const express = require('express');
// const router = express.Router();
const nodeHtmlToImage = require('node-html-to-image');
var Canvas = require('canvas');
const font = require('../../fonts/roboto.js');
const fontRoboto = font.roboto;
const {toFixedIfNecessary, formatSeconds, server, hdImage, formatPace} = require('../../utils/functions')


exports.render = async function(req,res) {
  // if (req.isAuthenticated()) { 
  if (true) { 
    
    let renderScale = {
      width: 1080,
      height: 1920,
      fontSize: 20,
      canvasTransform: 'translate(-50%, -55%)',
      splineWidth: 8
    }

    if (req.query.resolution === 'square') {
      renderScale = {
        width: 1920,
        height: 1920,
        fontSize: 30,
        canvasTransform: 'translate(-50%, -67%) scale(1.1)',
        splineWidth: 12
      }
    }

    function stats() {
      return 'stats'
    }

    let stravaPicture = "localhost:8000"

    console.log(req.query)
    console.log(renderScale)

   
    const output = (`
    
      <html>
        <head>
          <link rel="icon" href="${server()}/images/favicon.png"/>
          <style>
            ${fontRoboto()}
            html {
              width: ${renderScale.width}px;
              height: 1920px;
              font-size: ${renderScale.fontSize}px;
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
              transform: ${renderScale.canvasTransform};
            }
            .watermark {
              position: absolute;
              width: 100%;
              height: 10rem;
              bottom: 0;
              left: 0;
              right: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              font-size: 1.4rem;
              letter-spacing: 0.1rem;
              z-index: 1000;
              opacity: 0.5;
            }
          </style>
        </head>
        <body>
          <div style="position:relative; width: 100%; height: 100%;">
            <div class="watermark">made with moqop</div>
            <div class="stats">
              ${stats()}
            </div>
            ${stravaPicture ? 
              `
              <div class="gradient"></div>
              <img src=${stravaPicture} class="picture" />
              `
            : '<div class="solid"></div>'}
          </div>
          <script>
          
          </script>
        </body>
      </html>
    
    `)


    // TMP disabled for testing purposes
    // saveShot(stravaData);

    if (req.query.type === 'html') {
      // console.log(stravaData)
      res.send(output)
    } else {
      //Render image and send to front-end
      const puppeteer = { args: [ '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-accelerated-2d-canvas', '--no-first-run', '--headless', '--no-zygote', '--disable-gpu' ], headless: true, ignoreHTTPSErrors: true };
      const image = await nodeHtmlToImage({
        html: output,
        puppeteerArgs: puppeteer,
        defaultViewport: {
          width: renderScale.width,
          height: 1920
        }
      });

      const base64Image = Buffer.from(image).toString('base64');
      var dataURI = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

      // const dataURI = 'data:image/jpeg;base64,' + base64Image
      // console.log(dataURI)
      // res.send(dataURI)
      res.writeHead(200, { 'Content-Type': 'image/jpeg;base64' });
      // res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(image, 'binary');
    }

  } else {
    return res.status(400).send({
      message: 'User is not logged in!'
    });
  }
}


function saveShot(data) {
  console.log('saveShots')
  var savingData = {
    'athlete': data.athlete,
    'name' : data.name,
    'distance': data.distance,
    'moving_time': data.moving_time,
    'type': data.type
  }
  console.log(savingData)
  fetch(`${server()}/api/open/saveShot`, {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(savingData)
  }).then(res => {
      console.log('Shot saved');
  }) 
}