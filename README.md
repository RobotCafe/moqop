### About Moqop
[Moqop.com](https://moqop.com) is a design automation platform. 
One of the first functionality is rendering social media content based on athletes' Strava activity. 
The rendering engine can be extended to any design templates using APIs as a data source. 

### Become a sponsor
Moqop is a one-man show, a non-profit project that generates costs. I'd appreciate any kind of support or sponsorship. Feel free to check my [Github Sponsor page](https://github.com/sponsors/milangladis)

---

#### Use cases
- Generate an Instagram story or post based on the athlete's Strava activity
- WIP contains rendering Twitter's Tweets as an image that can be shared on other social media platforms. 
- Idea: Generate ads content via API for any resolution based on dynamic data and generated design templates

---

#### Examples
<div style="display: flex; justify-content: space-between;">
<img src="https://moqop.com/_next/image?url=%2Fimages%2Fexamples%2F3.jpg&w=640&q=75" width="30%">
<img src="https://moqop.com/_next/image?url=%2Fimages%2Fexamples%2F4.jpg&w=640&q=75" width="30%">
<img src="https://moqop.com/_next/image?url=%2Fimages%2Fexamples%2F1.jpg&w=640&q=75" width="30%">
</div>

---

#### How to set up Moqop locally?
1. Signup to Strava and generate your API key
2. Signup to Firebase and generate your API keys
    - In Firebase, go to `Project settings` → `Service accounts` → `Generate new private keys`
3. Set up the .env file
4. Run the project with 
    ```bash
    npm start
    ```
5. Open [localhost:8000](http://localhost:8000)

---

#### Helpers and problems
- https://dev.to/thomasledoux1/show-off-your-strava-stats-on-your-next-js-site-statically-5ehj
- [Issues with canvas on arm64](https://github.com/Automattic/node-canvas/blob/master/Readme.md)

---

#### Licensing
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 

The MIT License is a permissive open-source license that allows you to freely use, modify, and distribute this software, both for commercial and non-commercial purposes, as long as you include the original copyright notice and the license text in any copies or derivatives. However, the software is provided "as is," without warranty of any kind, express or implied. 

For more information about the MIT License, please visit: https://opensource.org/licenses/MIT
