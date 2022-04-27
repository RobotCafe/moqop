## Helpers
https://dev.to/thomasledoux1/show-off-your-strava-stats-on-your-next-js-site-statically-5ehj
## Strava authorisation
80214
http://www.strava.com/oauth/authorize?client_id=80214&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all


## TODO
https://www.youtube.com/watch?v=sgscChKfGyg&ab_channel=franchyze923
1) Get authorization code from authorization page. This is a one time, manual step. 
Paste the below code in a browser, hit enter then grab the "code" part from the resulting url. 

https://www.strava.com/oauth/authorize?client_id=your_client_id&redirect_uri=http://localhost:8000/api/cookie/set&response_type=code&scope=activity:read_all

2) Exchange authorization code for access token & refresh token

https://www.strava.com/oauth/token?client_id=80214&client_secret=25b8bfd5d74d1ed03eee1acb88f3ff664fdcc346&code=9b8f8ade742ef39b350669f27a028022538f8bb3&grant_type=authorization_code

https://www.strava.com/oauth/token?client_id=80214&client_secret=25b8bfd5d74d1ed03eee1acb88f3ff664fdcc346&code=e11dc3952383dd733fe3833110aecb145b4bd21b&grant_type=authorization_code


3) View your activities using the access token just received

https://www.strava.com/api/v3/athlete/activities?access_token=access_token_from_previous_step

3) Use refresh token to get new access tokens

https://www.strava.com/oauth/token?client_id=your_client_id&client_secret=your_client_secret&refresh_token=your_refresh_token_from_previous_step&grant_type=refresh_token




## Install package

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Production process
`npm run start:prod`

---
## Problems
issues with canvas on arm64
- https://github.com/Automattic/node-canvas/blob/master/Readme.md
