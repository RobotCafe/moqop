#### About
Moqop is design automation platform. 
One of the first functionality is rendering social media content based on athlete's Strava activity. 
Rendering engine can be extended to any kind of design templates that would use APIs as a data source. 

#### Use cases
- Generate Instagram story or post based on athlet's Strava activity
- WIP contains rendering Twitter's Tweets as an image that can be shared on other social media platforms. 
- Idea: Generate ads content via API for any resolution based on dynamic data and pregenerated design templates

---

#### How to set up Moqop localy?
1. Signup to Strava and generate your API key
2. Signup to Firebase and generate your API keys
    - In Firebase, go to `Project settings` → `Service accounts` → `Generate new private keys`
3. Set up .env file
4. Run the project with 
    ```bash
    npm start
    ```
5. Open [localhost:8000](http://localhost:8000)

---

#### Helpers and problems
- https://dev.to/thomasledoux1/show-off-your-strava-stats-on-your-next-js-site-statically-5ehj
- [Issues with canvas on arm64](https://github.com/Automattic/node-canvas/blob/master/Readme.md)
