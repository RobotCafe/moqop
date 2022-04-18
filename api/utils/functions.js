exports.toFixedIfNecessary = function( value, dp ) {

// }
// export function toFixedIfNecessary( value, dp ){
  return +parseFloat(value).toFixed( dp );
}

exports.formatSeconds = function(time) {

// }
// export function formatSeconds(time) {   
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";
  if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

exports.server = function() {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:8000' : 'https://strava-story.vercel.app';
  return server
}

exports.hdImage = function(url) {
  const path = url.split('-')
  console.log(path)
  var size = path[path.length - 1];
  size = size.split('.')
  size = size[0].split('x')
  var x = size[0]
  var y = size[1]
  var ratio = x/y
  var newSize;

  if (x < y) {
    // console.log('portrait')
    newSize = [2048*ratio, 2048]
  } else {
    // console.log('landscape')
    newSize = [2048, 2048*ratio]
  }

  // console.log(path)

  path[path.length - 1] = `${newSize[0]}x${newSize[1]}.jpg`
  var newPath = path.join('-')
  // console.log(newPath)
  // console.log(x, y, ratio, newSize)
  // console.log(`${path[0]}-${newSize[0]}x${newSize[1]}.jpg`)
  return newPath
}