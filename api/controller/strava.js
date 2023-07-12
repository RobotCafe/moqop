'use strict';
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();
require('dotenv').config();

exports.activity = async function(req,res) {

  console.log(req.params.id);
  
  const entries = await db.collection('access_tokens').get()
  // console.log(entries);
  let [{access_token, refresh_token}] = await entries.docs.map(entry => entry.data())
  console.log('tokens: ' + access_token, refresh_token)
  console.log('Request – Refresh token')
  const resToken = await fetch(
    `https://www.strava.com/api/v3/oauth/token?client_id=${process.env.CLIENT_ID_STRAVA}&client_secret=${process.env.CLIENT_SECRET_STRAVA}&grant_type=refresh_token&refresh_token=${refresh_token}`,
    {
      method: 'POST',
    },
  )
  .then(response => (response.json()))
  .then(dataAuth => {
    console.log('dataAuth')
    console.log(dataAuth)
    console.log('Request - Activity')
    fetch(
      `https://www.strava.com/api/v3/activities/${req.params.id}`,
      {
        method: 'GET',
        'Content-Type': 'application/json', 
        headers: {
          Authorization: `Bearer ${dataAuth.access_token}`,
        },
      },
    )
    .then(
      response => (response.json())
    )
    .then(dataActivity => {
        // console.log(dataActivity)
        const {
          access_token: newToken,
          refresh_token: newRefreshToken,
        } = dataAuth

        
        // console.log('tokens: ' + access_token, refresh_token)
        db.collection('access_tokens')
          .doc('92x9OctuhXthN1dmsW4z')
          .update({
              access_token: newToken,
              refresh_token: newRefreshToken,
            })
        return res.send(dataActivity);
    })
  })

}