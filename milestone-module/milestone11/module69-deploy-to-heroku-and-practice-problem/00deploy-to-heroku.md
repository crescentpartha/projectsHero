Table of Contents
---

- [Module 69: Deploy to Heroku and Practice Problem](#module-69-deploy-to-heroku-and-practice-problem)
  - [69.1 Introduction to Heroku setup account and initial deploy](#691-introduction-to-heroku-setup-account-and-initial-deploy)
    - [`Resources`](#resources)
    - [`Must use those lines or commands`](#must-use-those-lines-or-commands)
    - [`Server Deploy` (Setup - one time)](#server-deploy-setup---one-time)
    - [`Deploy the app` (Setup - For each project one time)](#deploy-the-app-setup---for-each-project-one-time)


# Module 69: Deploy to Heroku and Practice Problem

## 69.1 Introduction to Heroku setup account and initial deploy

### `Resources`

- [Heroku](https://signup.heroku.com/ "Create your Heroku account") - Create account
  - First name > Last name > Email address > ___Student___ (Role) > ___Bangladesh___ (Country/Region) > ___Node.js___ (Language) > CREATE FREE ACCOUNT > Verify Email > Set Password and Login > Click here to proceed > ___Accept___ (Everything remain Default)
- [Heroku Documentation](https://devcenter.heroku.com/) 
- [Get Started > Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs "Getting Started on Heroku with Node.js") 
  - ___I'm ready to start___ > ___64-bit Installer___ (download) > ___Install___

**[🔼Back to Top](#table-of-contents)**

### `Must use those lines or commands`

``` JavaScript
// To Deploy in Heroku

const port = process.env.PORT || 5000;  // Heroku is a shared server and One port runs one application. So, Heroku gives a dynamic port for you.
"start": "node index.js", // To start server on Heroku | Heroku automatically start the server using this command.
```

**[🔼Back to Top](#table-of-contents)**

### `Server Deploy` (Setup - one time)

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

### `Deploy the app` (Setup - For each project one time)

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

> `Notes:` Create `individual Server-Side Project`. Otherwise, `Heroku doesn't identify your git commit` and Say, please make sure you have the `correct access rights` and the `repository exists`.

**[🔼Back to Top](#table-of-contents)**

