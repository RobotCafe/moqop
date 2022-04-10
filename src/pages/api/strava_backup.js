// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const activityId = '6871108204'
const access_token = '66be09671347977f081e36234e7ae3842838c88c'

async function getStrava() {
  const options = {
    method: 'GET',
    'Content-Type': 'application/json',
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  }
  // const url = `https://www.strava.com/api/v3/athlete`
  // const url = `https://www.strava.com/api/v3/athlete/activities/`
  const url = `https://www.strava.com/api/v3/activities/${activityId}`
  
  const response = await fetch(url, options)
  console.log(response.status)
  console.log('REQUEST!')
  if (response.status == 401) {
    console.log('fetch new token')
    // https://www.strava.com/oauth/authorize?client_id=80214&redirect_uri=http://localhost&response_type=code&scope=activity:read_all
  }
  return response.body
}

export default function handler(req, res) {
  
  getStrava()
    .then(data => {
      res.status(200).json(data)

    })
}



