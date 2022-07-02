const puppeteer = require('puppeteer');

exports.render = async function(req,res) {

  const size = {
    width: 360,
    height: 640,
    pixelRatio: 1
  }
  console.log(size.pixelRatio);
  size.width = size.width * size.pixelRatio;
  size.height = size.height * size.pixelRatio;

  (async () => {
    const browser = await puppeteer.launch({
      // headless: false,
      // args: [ '--disable-web-security', ],
      // slowMo: 350, // slow down by 250ms
    });
    const page = await browser.newPage();
    await page.setViewport({ width: size.width, height: size.height, deviceScaleFactor: 3 });
    await page.goto('http://localhost:8000/m-single', {
      waitUntil: 'networkidle0'
    });

    const imageBuffer = await page.screenshot({
      type: 'jpeg',
      quality: 100,
      printbackground: true,
      clip: {
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
      },
      omitBackground: false,
    });

    res.writeHead(200, { 'Content-Type': 'image/jpeg;base64' });
    res.end(imageBuffer, 'binary');
  
    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio,
      };
    });
  
    console.log('Dimensions:', dimensions);
  
    await browser.close();
  })();
}

