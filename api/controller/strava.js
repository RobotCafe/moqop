'use strict';

exports.activity = function(req,res) {
	console.log(req.query.id);
  return res.send('fetched activity from strava');
}

exports.stravaItem = function(req,res) {
	console.log(req.query.id);
  return res.send('fetched activity from strava');
}



    // const resStats = await fetch(
    //   // 'https://www.strava.com/api/v3/athletes/42409445/stats',
    //   // `https://www.strava.com/api/v3/activities/${event}`,
    //   'https://www.strava.com/api/v3/athlete',
    //   {
    //     method: 'GET',
    //     'Content-Type': 'application/json', 
    //     headers: {
    //       Authorization: `Bearer ${props.test.logs.new_token}`,
    //     },
    //   },
    // )
    // .then(
    //   response => (
    //     console.log(response.json()),
    //     // setActivityData(response)
    //   )
    // )
    // .then(data => {
    //     console.log(data)
    //     setActivityData(data)
    // })


    // var activityData = await resStats.json()