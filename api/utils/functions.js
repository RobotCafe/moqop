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