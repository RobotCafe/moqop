#About
Moqop is design automation platform. 
One of the first functionality is rendering social media content based on athlete's Strava activity. 
Rendering engine can be extended to any kind of design templates that would use APIs as a data source. 

### Examples
- Generate Instagram story or post based on Strava activity
- Work in progress concepts contains rendering Twitter's Tweets as an image that can be shared on other social media platforms. 
- Idea: Generate ads content via API for any resolution based on dynamic data and pregenerated design templates


---

## Helpers
https://dev.to/thomasledoux1/show-off-your-strava-stats-on-your-next-js-site-statically-5ehj
## Strava authorisation
http://www.strava.com/oauth/authorize?client_id=[CLIENT_ID]&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all


## TODO
https://www.youtube.com/watch?v=sgscChKfGyg&ab_channel=franchyze923
1) Get authorization code from authorization page. This is a one time, manual step. 
Paste the below code in a browser, hit enter then grab the "code" part from the resulting url. 
https://www.strava.com/oauth/authorize?client_id=[YOUR_CLIENT_ID]&redirect_uri=http://localhost:8000/api/cookie/set&response_type=code&scope=activity:read_all

2) Exchange authorization code for access token & refresh token

https://www.strava.com/oauth/token?client_id=[CLIENT_ID]&client_secret=[YOUR_CLIENT_SECRET]&code=[CODE_FROM_STEP_1]&grant_type=authorization_code


3) View your activities using the access token just received

https://www.strava.com/api/v3/athlete/activities?access_token=[ACCESS_TOKEN_FROM_PREVIOUS_STEP]

3) Use refresh token to get new access tokens

https://www.strava.com/oauth/token?client_id=[YOUR_CLIENT_ID]&client_secret=[YOUR_CLIENT_SECRET]&refresh_token=[YOUR_REFRESH_TOKEN_FROM_PREVIOUS_STEP]&grant_type=refresh_token




## Install package

First, run the development server:

```bash
npm start
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

---

## Production process
`npm run start:prod`


## Helpers
Switch node version
https://github.com/tj/n

---
## Problems
issues with canvas on arm64
- https://github.com/Automattic/node-canvas/blob/master/Readme.md
