const express = require('express');
const router = express.Router();
const nodeHtmlToImage = require('node-html-to-image');

exports.stravaOne = async function(req,res) {

  console.log(req.url)
  url = `https://dgtzuqphqg23d.cloudfront.net/aTpNfIRborEoByWZfre5okuKo1o9nnIbXQmDA-Mr39g-576x768.jpg`
  const imageData = await fetch(url).then(r => r.buffer()).then(buf => `data:image/jpg;base64,`+buf.toString('base64'));


  function stats() {

  const data = [
    {
      name: 'Run',
      value: '23 km'
    }, 
    {
      name: 'Elev Gain',
      value: '585 m'
    }, 
    {
      name: 'Time',
      value: '1:45:34'
    }
  ]
    var content;
    data.forEach((value, index) => {
      console.log(value)
      console.log('Index: ' + index + ' Value: ' + value);
      var item = `
        <div class="title">${value.name}</div>
        <div class="value">${value.value}</div>
      `
      content =+ content + item
    }); 
    console.log(content)
    return content
  }

console.log(stats())

  const output = (`
  
    <html>
      <head>
        <style>
          body, html {
            width: 1080px;
            height: 1920px;
            color: #fff
          }
        </style>
      </head>
      <body>
        <div style="position:relative; width: 100%; height: 100%;">
          <div style="position: absolute; z-index: 10; bottom 120px;">
            ${stats()}
          </div>
          <img style="position: absolute; top:0; left:0; right:0; bottom: 0; width: 100%; height: 100%; object-fit: cover;" src="${imageData}" width="400" height="400" />
        </div>
      </body>
    </html>
  
  `)

  const image = await nodeHtmlToImage({
    html: output,
    defaultViewport: {
      width: 1080,
      height: 1920
    }
  });
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(image, 'binary');
}