exports.getAll = async function(req, res) {
  // console.log(req._passport.session.user._json)
  // res.send(req._passport.session.user._json)

  if (req._passport.session.user === undefined) {
    // res.redirect('/auth/strava/')
    res.send('user not logged in')
  } else {
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
    .then(data => {
      // console.log('data')
      // console.log(data)
      res.send(data)
    }).catch((error) => {
        console.log(error)
      });
  }

}