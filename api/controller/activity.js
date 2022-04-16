exports.getAll = async function(req, res) {
  // console.log(req._passport.session.user._json)
  // res.send(req._passport.session.user._json)
  fetch(
    'https://www.strava.com/api/v3/athlete/activities',
    {
      method: 'GET',
      'Content-Type': 'application/json', 
      headers: {
        Authorization: `Bearer ${req._passport.session.user._json.token}`,
      },
    },
  )
  .then(
    response => (response.json())
  )
  .then(dataActivity => {
    // console.log('dataActivity')
    console.log(dataActivity)
    res.send(dataActivity)
  })
}