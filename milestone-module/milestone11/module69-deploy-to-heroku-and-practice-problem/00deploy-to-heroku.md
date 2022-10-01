Table of Contents
---

- [Module 69: Deploy to Heroku and Practice Problem](#module-69-deploy-to-heroku-and-practice-problem)
  - [69.1 Introduction to Heroku setup account and initial deploy](#691-introduction-to-heroku-setup-account-and-initial-deploy)
    - [`Resources`](#resources)
    - [`Must use those lines or commands`](#must-use-those-lines-or-commands)
    - [`Server Setup`](#server-setup)
      - [`Server Deploy in Heroku` (Setup - one time)](#server-deploy-in-heroku-setup---one-time)
      - [`Deploy the app` (Setup - For each project one time)](#deploy-the-app-setup---for-each-project-one-time)
  - [69.2 Deploy client side project to firebase with server side url](#692-deploy-client-side-project-to-firebase-with-server-side-url)
    - [`UPDATE SERVER with new changes`](#update-server-with-new-changes)
    - [`Connect Server with Client and Deploy Client`](#connect-server-with-client-and-deploy-client)
  - [69.3 Test live website and push update to the client-side](#693-test-live-website-and-push-update-to-the-client-side)
    - [`Summary`](#summary)
      - [`Step-01` (Server Deploy in Heroku)](#step-01-server-deploy-in-heroku)
        - [`Investigation`](#investigation)
      - [`Step-02`](#step-02)
    - [`Some fact about localhost, Heroku-Server, MongoDB-Database`](#some-fact-about-localhost-heroku-server-mongodb-database)


# Module 69: Deploy to Heroku and Practice Problem

## 69.1 Introduction to Heroku setup account and initial deploy

### `Resources`

- [Heroku](https://signup.heroku.com/ "Create your Heroku account") - Create account
  - First name > Last name > Email address > ___Student___ (Role) > ___Bangladesh___ (Country/Region) > ___Node.js___ (Language) > CREATE FREE ACCOUNT > Verify Email > Set Password and Login > Click here to proceed > ___Accept___ (Everything remain Default)
- [Heroku Documentation](https://devcenter.heroku.com/) 
- [Get Started > Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs "Getting Started on Heroku with Node.js") 
  - ___I'm ready to start___ > ___64-bit Installer___ (download) > ___Install___
- [02genius-car-services-server 69.1M](https://github.com/crescentpartha/02genius-car-services-server/blob/main/Steps.md "Documentation for Module-69.1")

**[🔼Back to Top](#table-of-contents)**

### `Must use those lines or commands`

``` JavaScript
// To Deploy in Heroku

const port = process.env.PORT || 5000;  // Heroku is a shared server and One port runs one application. So, Heroku gives a dynamic port for you.
"start": "node index.js", // To start server on Heroku | Heroku automatically start the server using this command.
```

**[🔼Back to Top](#table-of-contents)**

### `Server Setup`

#### `Server Deploy in Heroku` (Setup - one time)

1. Create Heroku account 
2. Verify Email 
3. Install Heroku CLI 
4. `heroku login` (go inside your ___server-side project___ using `Command Prompt`)
   - `Enter` ⋙ ___To open up the browser___ | `q` ⋙ ___To exit___
   - `Log in`
   - ___I have installed the Heroku CLI___ (Clicked on)

``` JavaScript
// check that you have the prerequisites installed properly

node --version
npm --version
git --version
```
5. `npm run start-dev` ⋙ To run `nodemon index.js` command ⋙ To check it run locally perfectly
   - `http://localhost:5000` ⋙ To check server is running
   - `http://localhost:5000/service` ⋙ To confirm, it brings the data from MongoDB 

**[🔼Back to Top](#table-of-contents)**

#### `Deploy the app` (Setup - For each project one time)

- [Deploy the app](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app "Deploy the app - Getting Started on Heroku with Node.js - heroku.com") (run in `Command Prompt`)

---

1. `heroku create` 

``` JavaScript
02genius-car-services-server>heroku create
 »   Warning: heroku update available from 7.53.0 to 7.63.4.
Creating app... done, ⬢ sleepy-depths-59287
https://sleepy-depths-59287.herokuapp.com/ | https://git.heroku.com/sleepy-depths-59287.git
```

2. Make sure everything is ___updated___ like `git add .` `git commit` `git push`
3. `git push heroku main` 
   - ___Code push in heroku main branch using git command___ 
   - ___Deploy your code___ | initial deploy
   - ___Copy the link___ and ___paste___ in the ___browser___ to ___run___
   - [02genius-car-services-server 69.1M](https://github.com/crescentpartha/02genius-car-services-server/blob/main/Steps.md "Documentation for Module-69.1")
4. Go to Heroku ___Dashboard___ > Current Project (___serene-peak-34256___) > Settings > ___Reveal Config Vars___
5. Copy Paste ___config vars___ from your `.env` file

``` JavaScript
// Reveal Config Vars > Config Vars

// KEY VALUE Add
DB_USER geniusUser
DB_PASS WfRnZQmYC5To03nC
ACCESS_TOKEN_SECRET 36b843f7f482bfdb3a50d37112e11de90b97afc23acb72608f0e74c07048c7d0046f60fa86402838f89c9789e56fc0f46a95155351f04f249efd404603664d35
```

6. Make sure you have ___whitelisted all ip address___ to access mongodb
7. `https://serene-peak-34256.herokuapp.com/service` check ___data loaded___ or not. If loaded, then ___Server-Setup Done___

> `Notes:` Create `individual Server-Side Project`. Otherwise, `Heroku doesn't identify your git commit` and Say, please make sure you have the `correct access rights` and the `repository exists`.

**[🔼Back to Top](#table-of-contents)**

## 69.2 Deploy client side project to firebase with server side url

### `UPDATE SERVER with new changes`

1. Make changes
2. Make sure everything is ___updated___ like `git add .` `git commit` `git push`
3. `git push heroku main` 

**[🔼Back to Top](#table-of-contents)**

### `Connect Server with Client and Deploy Client`

1. Replace localhost by heroku link
   - `http://localhost:5000/` by `https://serene-peak-34256.herokuapp.com/` in Client-side
2. `npm run build`
3. `firebase deploy`
   - [https://genius-car-services-a8da0.web.app](https://genius-car-services-a8da0.web.app) check everything is ok or not.

**[🔼Back to Top](#table-of-contents)**

## 69.3 Test live website and push update to the client-side

### `Summary`

#### `Step-01` (Server Deploy in Heroku)

1. Heroku install
2. Heroku login
3. Heroku create
4. Everything send to the GitHub
5. git push heroku main

**[🔼Back to Top](#table-of-contents)**

##### `Investigation`

1. Check ___PORT___ is alright or not
2. Check ___Start Script___ is alright or not
3. Dashboard > Project > Setting > Set `Config Vars` or `Environment Variables`
4. Then, Check everything is ___Ok or not___ like a ___normal User___.

**[🔼Back to Top](#table-of-contents)**

#### `Step-02`

1. ___Root URL___ works or not.
2. Check ___connection with mongodb___ (Load some products data)
3. ___Replace___ `localhost by Heroku URL` in client-side

**[🔼Back to Top](#table-of-contents)**

### `Some fact about localhost, Heroku-Server, MongoDB-Database`

- Previously, ___client-side takes data___ from ___Local-Computer-Server___, but ___connected with MongoDB___.
- Now, we ___deploy Server in Heroku___ and also ___Config setup in Heroku___. So, ___Heroku-Server connected___ with ___MongoDB___.
- As we ___replace the Localhost with Heroku-Link___, So, if we ___run client in locally___, it will also ___connected to MongoDB through the Heroku-Server___.
- We send our ___client-side in firebase___ by `npm run build` or `making a package`. So, if we ___close our localhost___, it will also ___run___ from `firebase live website link` and also it's ___database isn't a localhost___.

---

- So, we made `two deploy` a React App.
  1. ___Firebase Deploy___ (client-side)
  2. ___Heroku Deploy___ (server-side)
- `Responsibility`
  1. Everything is ___running perfectly___, not only ___Homepage___. 
  2. In large Organization, `CI-CD` modestly ensure that everything is ___run perfectly after deploying___. 
  3. But, As a developer, it is our ___responsibility___ to maintain everything is Ok or works perfectly.

---

- People ___configure for different environment___ (for serious or professional works or large application)
  1. ___Connect to the localhost___, when works for the ___development___.
  2. When ___deploy___, they read according to ___environment variables___.
- As a beginner, we run it from ___Heroku-link___. But, in a large application, it ___doesn't work___ or it ___isn't the standard process___.
- If we ___change anything for development___, we should run it ___locally___ by using ___localhost___. After ___deployment___, it runs from ___Heroku-link___.
  - So, we should use `busy url` after going to ___axios___ or used `proxy`. 


**[🔼Back to Top](#table-of-contents)**

