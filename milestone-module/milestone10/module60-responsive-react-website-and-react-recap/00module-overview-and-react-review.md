Table of Contents
---

- [Module 60: Responsive React Website and React Recap](#module-60-responsive-react-website-and-react-recap)
  - [60.1 Module Overview and simple review of React](#601-module-overview-and-simple-review-of-react)
    - [`React Core Concepts:`](#react-core-concepts)
    - [`React-Router Website:`](#react-router-website)
    - [`Firebase:`](#firebase)
    - [`Responsive React Website:`](#responsive-react-website)
    - [`Conceptual Session:`](#conceptual-session)
    - [`Conclusion:`](#conclusion)
  - [60.2 Create Project Component setup and router setup](#602-create-project-component-setup-and-router-setup)
    - [`Basic Project Setup:`](#basic-project-setup)
    - [`If Clone any React Project:` (Need to follow some ___steps___)](#if-clone-any-react-project-need-to-follow-some-steps)
    - [`Authentication Steps or Auth_steps:`](#authentication-steps-or-auth_steps)
    - [`Firebase Hosting/Deploy Steps:` (for ___1st time___)](#firebase-hostingdeploy-steps-for-1st-time)
    - [`Firebase Hosting/Deploy Steps:` (for ___2nd/multiple times___)](#firebase-hostingdeploy-steps-for-2ndmultiple-times)
  - [60.3 Collect, Edit, Optimize and host images for your website](#603-collect-edit-optimize-and-host-images-for-your-website)
    - [`Image Resources:`](#image-resources)
  - [60.4 Load fake data map services to display single services](#604-load-fake-data-map-services-to-display-single-services)
    - [`Load & display Data:`](#load--display-data)
  - [60.5 Make Services Responsive using CSS media query](#605-make-services-responsive-using-css-media-query)
    - [`CSS Media Query:` (___Vanilla CSS___) (___sample___)](#css-media-query-vanilla-css-sample)
    - [`Make services Responsive:` (___according to Bootstrap___)](#make-services-responsive-according-to-bootstrap)
    - [`Examples:`](#examples)
  - [60.6 Build Responsive React website using Bootstrap](#606-build-responsive-react-website-using-bootstrap)
    - [`Using Bootstrap:`](#using-bootstrap)
  - [60.7 React Bootstrap for responsive and image slider, banner](#607-react-bootstrap-for-responsive-and-image-slider-banner)
    - [`Using React-Bootstrap:`](#using-react-bootstrap)
  - [60.8 Module Summary, Add navbar and set footer dynamic date](#608-module-summary-add-navbar-and-set-footer-dynamic-date)
    - [`Header using React-Bootstrap & React-Router:`](#header-using-react-bootstrap--react-router)
  - [Quiz](#quiz)
- [Module 60.5: Firebase auth and private Route Recap](#module-605-firebase-auth-and-private-route-recap)
  - [60.5.1 Firebase auth and private Route Recap](#6051-firebase-auth-and-private-route-recap)
    - [`Google Authentication with react-firebase-hooks:`](#google-authentication-with-react-firebase-hooks)
  - [60.5.2 Practice Firebase Authentication, Implement Twitter Authentication with react-firebase-hooks](#6052-practice-firebase-authentication-implement-twitter-authentication-with-react-firebase-hooks)
    - [`Steps to use firebase & (Twitter Authentication):` (___Twitter Sign-in Provider___)](#steps-to-use-firebase--twitter-authentication-twitter-sign-in-provider)
- [Module 61: React Router and Firebase Auth Recap](#module-61-react-router-and-firebase-auth-recap)
  - [61.1 Responsive Header Component - sticky top](#611-responsive-header-component---sticky-top)
  - [61.2 Setup Dynamic Route and Access route params](#612-setup-dynamic-route-and-access-route-params)
    - [`Reading URL Params (Steps):` (___Setup:___ `route` - `parameter-&-click` - `getId`)](#reading-url-params-steps-setup-route---parameter--click---getid)
      - [`01. Set Nested Route:` (___route___)](#01-set-nested-route-route)
      - [`02. Set navigate:` (___parameter-&-click___)](#02-set-navigate-parameter--click)
      - [`03. Get invoiceId:` (___getId___)](#03-get-invoiceid-getid)
  - [61.6 (optional) Environment variable for Firebase in Create React App | Get form data in 3 different ways](#616-optional-environment-variable-for-firebase-in-create-react-app--get-form-data-in-3-different-ways)
    - [`Get Form data in 3 different ways:`](#get-form-data-in-3-different-ways)
    - [`Adding Custom Environment Variables:` (___Set Environment Variables___ for Firebase Config)](#adding-custom-environment-variables-set-environment-variables-for-firebase-config)
    - [`Without setup Environment Variables for Firebase Configuration:`](#without-setup-environment-variables-for-firebase-configuration)
    - [`Set Environment Variables for Firebase Configuration in Create React App:`](#set-environment-variables-for-firebase-configuration-in-create-react-app)
    - [`After Setup Environment Variable:` (___run___ `npm start`, otherwise get some ___Error___)](#after-setup-environment-variable-run-npm-start-otherwise-get-some-error)
    - [`Some Error are showing below:` (you could get this kind of error, if ___not run___ `npm start`)](#some-error-are-showing-below-you-could-get-this-kind-of-error-if-not-run-npm-start)
    - [`KeyBoard Shortcut:`](#keyboard-shortcut)
    - [`Issue:` Navigate to #id in Layout component - stack overflow](#issue-navigate-to-id-in-layout-component---stack-overflow)
- [Module 63.5: Dynamic Title and Google Map](#module-635-dynamic-title-and-google-map)
  - [63.5.1 Set favicon and search for title to be displayed on the website](#6351-set-favicon-and-search-for-title-to-be-displayed-on-the-website)
    - [`How to Find & Setup Favicon.ico`](#how-to-find--setup-faviconico)
    - [`Dynamic Title on your React App` (Resources & Information)](#dynamic-title-on-your-react-app-resources--information)
  - [63.5.2 Set Dynamic page title based on Route using react-helmet-async](#6352-set-dynamic-page-title-based-on-route-using-react-helmet-async)
    - [`Install react-helmet-async` - (`Step-01`)](#install-react-helmet-async---step-01)
    - [`Wrap the index.js file` - (`Step-02`)](#wrap-the-indexjs-file---step-02)
    - [`Set Helmet & title, where (In which Route) you want to use` - (`Step-03`)](#set-helmet--title-where-in-which-route-you-want-to-use---step-03)
    - [`Create a Component in Shared folder called PageTitle:` - (Simple `way-01`) - (`Step-03`)](#create-a-component-in-shared-folder-called-pagetitle---simple-way-01---step-03)
    - [`More Efficient:` - (`way-02`) - (`Step-03`)](#more-efficient---way-02---step-03)
  - [63.5.3 Do not allow protected route without email verification](#6353-do-not-allow-protected-route-without-email-verification)
    - [`Concepts of Email Verification`](#concepts-of-email-verification)
    - [`Main Functionality`](#main-functionality)
    - [`Full Example`](#full-example)
  - [63.5.4 How to display a location and a Marker on a Google Map](#6354-how-to-display-a-location-and-a-marker-on-a-google-map)
    - [`Maps Resources` (free and paid)](#maps-resources-free-and-paid)
    - [`Install @react-google-maps/api`](#install-react-google-mapsapi)
    - [`Protect you Google API Key`](#protect-you-google-api-key)
    - [`Get your own location from Google_Map`](#get-your-own-location-from-google_map)
    - [`Set My Location on Maps`](#set-my-location-on-maps)
    - [`Set Directions`](#set-directions)
  - [63.5.5 Display Dynamic Driving Direction and Route on Google Map](#6355-display-dynamic-driving-direction-and-route-on-google-map)
    - [`Set Directions`](#set-directions-1)
    - [`Take origin & destination input form user`](#take-origin--destination-input-form-user)
- [Module 66: Genius Car Node Mongo CRUD Recap](#module-66-genius-car-node-mongo-crud-recap)
  - [61.1 (Conceptual) Node, Mongo, React, Client, Server, Rest, CRUD](#611-conceptual-node-mongo-react-client-server-rest-crud)
    - [`Technology Selection`](#technology-selection)
  - [66.2 Setup simple node express server with dotenv](#662-setup-simple-node-express-server-with-dotenv)
    - [`Clone project's Requirements`](#clone-projects-requirements)
    - [`Basic Server Setup Steps`](#basic-server-setup-steps)
      - [`Create Directory`](#create-directory)
      - [`Create package.json file`](#create-packagejson-file)
      - [`Install Express, CORS, MongoDB, dotenv`](#install-express-cors-mongodb-dotenv)
      - [`Install nodemon` (one time for each computer)](#install-nodemon-one-time-for-each-computer)
      - [`Modify scripts of package.json file`](#modify-scripts-of-packagejson-file)
      - [`Steps for Express/Node server` (in index.js)](#steps-for-expressnode-server-in-indexjs)
      - [`Set middleware`](#set-middleware)
      - [`import and configure dotenv:`](#import-and-configure-dotenv)
      - [`Set .gitignore for node project`](#set-gitignore-for-node-project)
      - [`Create a .env file in the root of your project`](#create-a-env-file-in-the-root-of-your-project)
      - [`Run Node server or Backend server`](#run-node-server-or-backend-server)
  - [66.3 Connect to database with secure password on environment variable](#663-connect-to-database-with-secure-password-on-environment-variable)
    - [`Create a Database inside the previous Cluster`](#create-a-database-inside-the-previous-cluster)
    - [`Insert Data on MongoDB Database`](#insert-data-on-mongodb-database)
    - [`Connection Setup with Database` (Find multiple user)](#connection-setup-with-database-find-multiple-user)
    - [`How to get connection string from MongoDB Database`](#how-to-get-connection-string-from-mongodb-database)
    - [`How to get password from MongoDB`](#how-to-get-password-from-mongodb)
    - [`Full Example`](#full-example-1)
  - [66.4 Load all services and create single service API](#664-load-all-services-and-create-single-service-api)
    - [`Data Load from Database`](#data-load-from-database)
    - [`All services data Load from Database`](#all-services-data-load-from-database)
    - [`Particular service data Load from Database`](#particular-service-data-load-from-database)
    - [`Full Example` (Load particular service data & all services data from Database)](#full-example-load-particular-service-data--all-services-data-from-database)
    - [`Modified Client-side Code`](#modified-client-side-code)
    - [`Full Example` (Modified Client-side Code)](#full-example-modified-client-side-code)
  - [66.5 Load single Service, Use React hook form to add service](#665-load-single-service-use-react-hook-form-to-add-service)
    - [`Module-wise Task list`](#module-wise-task-list)
    - [`Particular (id-wise) data load in ServiceDetail.js component`](#particular-id-wise-data-load-in-servicedetailjs-component)
    - [`Verify Email: Only for password`](#verify-email-only-for-password)
    - [`Create AddService.js component and Use react-hook-form to add service`](#create-addservicejs-component-and-use-react-hook-form-to-add-service)
    - [`Setup Route with RequireAuth`](#setup-route-with-requireauth)
    - [`AddService added as a Add Route to the Header component`](#addservice-added-as-a-add-route-to-the-header-component)
  - [66.6 Insert Service data to the mongodb cloud database](#666-insert-service-data-to-the-mongodb-cloud-database)
    - [`Module-wise Task list`](#module-wise-task-list-1)
    - [`Modified AddService.js component`](#modified-addservicejs-component)
    - [`POST a service from server-side to database`](#post-a-service-from-server-side-to-database)
    - [`POST a service from client-side to server-side`](#post-a-service-from-client-side-to-server-side)
    - [`Full Code Example`](#full-code-example)
  - [66.7 Manage Services and explore delete api](#667-manage-services-and-explore-delete-api)
    - [`Module-wise Task list`](#module-wise-task-list-2)
    - [`Create a ManageServices.js component`](#create-a-manageservicesjs-component)
    - [`Setup Route with RequireAuth`](#setup-route-with-requireauth-1)
    - [`ManageServices added as a Manage Route to the Header component`](#manageservices-added-as-a-manage-route-to-the-header-component)
    - [`Create a custom hook called useServices.js`](#create-a-custom-hook-called-useservicesjs)
    - [`DELETE a service from server-side to database`](#delete-a-service-from-server-side-to-database)
    - [`DELETE a service from client-side`](#delete-a-service-from-client-side)
    - [`Full Code Example`](#full-code-example-1)
  - [66.8 Module Summary and git push](#668-module-summary-and-git-push)
    - [`Module Tast List`](#module-tast-list)
    - [`Clone Repository`](#clone-repository)
  - [Quiz 66](#quiz-66)
- [Module 68: (Advanced) Secure API using JWT](#module-68-advanced-secure-api-using-jwt)
  - [68.0 Text Instruction](#680-text-instruction)
    - [`What I know from this Milestone`](#what-i-know-from-this-milestone)
    - [`What I will know`](#what-i-will-know)
    - [`Learning from this Module`](#learning-from-this-module)
  - [68.1 Module Introduction Project setup recap custom hook](#681-module-introduction-project-setup-recap-custom-hook)
    - [`App.js`](#appjs)
    - [`Create Custom Hook called useServiceDetail.js`](#create-custom-hook-called-useservicedetailjs)
    - [`ServiceDetail.js`](#servicedetailjs)
    - [`Checkout.js`](#checkoutjs)
  - [68.2 (Optional) Handle Controlled input value change in your form](#682-optional-handle-controlled-input-value-change-in-your-form)
    - [`Error` (Changing an uncontrolled input to be controlled)](#error-changing-an-uncontrolled-input-to-be-controlled)
      - [`Fix the Error` (Changing an uncontrolled input to be controlled)](#fix-the-error-changing-an-uncontrolled-input-to-be-controlled)
    - [`Create another Error` (provided a `value` prop to a form field without an `onChange` handler)](#create-another-error-provided-a-value-prop-to-a-form-field-without-an-onchange-handler)
  - [68.3 Get Order data, create API endpoint and readonly input](#683-get-order-data-create-api-endpoint-and-readonly-input)
    - [`Install Axios` (in client-side)](#install-axios-in-client-side)
    - [`Create Order Collection API` (index.js)](#create-order-collection-api-indexjs)
    - [`Modified Form` (Checkout.js)](#modified-form-checkoutjs)
  - [68.4 Save order for multiple users and set one account per user](#684-save-order-for-multiple-users-and-set-one-account-per-user)
    - [`Modified Checkout.js`](#modified-checkoutjs)
    - [`Create Order.js component`](#create-orderjs-component)
    - [`Modified App.js` (Toast added globally & orders route added)](#modified-appjs-toast-added-globally--orders-route-added)
    - [`Orders Route added in Header component` (if user logged in)](#orders-route-added-in-header-component-if-user-logged-in)
  - [68.5 Filter orders info by email address and introduction JWT token](#685-filter-orders-info-by-email-address-and-introduction-jwt-token)
    - [`Get Order collection API` (get all orders json data for single user according to email address) - (server-side)](#get-order-collection-api-get-all-orders-json-data-for-single-user-according-to-email-address---server-side)
    - [`Get Order collection API` (get all orders json data for single user according to email address) - (client-side)](#get-order-collection-api-get-all-orders-json-data-for-single-user-according-to-email-address---client-side)
    - [`JSON Web Tokens` (JWT = jsonwebtoken) - (Introduction)](#json-web-tokens-jwt--jsonwebtoken---introduction)
    - [`Install JWT`](#install-jwt)
  - [68.6 (Advanced) Create JWT Token, Get jwt token on client-side](#686-advanced-create-jwt-token-get-jwt-token-on-client-side)
    - [`JWT Introduction`](#jwt-introduction)
    - [`Issue JWT token` (generate/create jwt token)](#issue-jwt-token-generatecreate-jwt-token)
    - [`Create Hash Secret Key`](#create-hash-secret-key)
    - [`Implement: navigate after getting the token` (if Logged in)](#implement-navigate-after-getting-the-token-if-logged-in)
    - [`Full Code Example`](#full-code-example-2)
  - [68.7 (Advanced) Send jwt token in the server, verify and decode jwt token](#687-advanced-send-jwt-token-in-the-server-verify-and-decode-jwt-token)
    - [`Verify JWT Token`](#verify-jwt-token)
      - [`How to get the token`](#how-to-get-the-token)
      - [`Verify JWT Token` (in server-side)](#verify-jwt-token-in-server-side)
    - [`Set Headers` (in Order.js)](#set-headers-in-orderjs)
    - [`Full Code Example`](#full-code-example-3)
  - [68.8 (Advanced) Handle 401, 403 to log out user and interceptors](#688-advanced-handle-401-403-to-log-out-user-and-interceptors)
    - [`HTTP Status Codes`](#http-status-codes)
    - [`Create axiosPrivate.js API`](#create-axiosprivatejs-api)
    - [`Handle the Status Codes`](#handle-the-status-codes)
  - [68.9 (Conceptual) What is JWT and how does it work](#689-conceptual-what-is-jwt-and-how-does-it-work)
    - [`Introduction`](#introduction)
    - [`Why do we use JWT?`](#why-do-we-use-jwt)
    - [`How JWT Works?`](#how-jwt-works)
    - [`What JWT looks like?`](#what-jwt-looks-like)
  - [Quiz 68](#quiz-68)
- [Module 69: Deploy to Heroku and Practice Problem](#module-69-deploy-to-heroku-and-practice-problem)
  - [`Documentation Links for Module 69`](#documentation-links-for-module-69)



# Module 60: Responsive React Website and React Recap

## 60.1 Module Overview and simple review of React

### `React Core Concepts:`

1. How to create a ___React App___ by ___create-react-app___
   - ___Library VS Frameworks___
   - ___JSX___
   - Adding ___CSS Modules___ → Header.module.css
   - Adding ___Images___, ___Fonts___, and ___Files___
   - Create React App > ___Testing___ > Running Tests & Debugging Tests
2. How to create and use ___component___
3. How to ___send data___ in a component by using ___props___
   - Send Data like ___single value___, ___number___, ___name___, ___object___, ___array___, ___function___, ___component___ as a props
   - ___Render props___
   - ___Context API___ over props (avoid ___props drilling___)
4. How to ___use object properties___ by using ___destructuring___
5. How to ___declare a state___ by using ___useState___
6. How to ___change a state___ by using ___EventHandler___
   - Event Handlers ___without parameters___
   - Event Handlers with ___parameters___ (___wrap___ by ___arrow function___)
7. How to ___load and display___ data from ___API___ by using ___useEffect___
   - ___External___ data load & control ___side-effect___
8. ___Custom Hooks___


### `React-Router Website:`

1. Project ___set up___ and ___install___ React Router
2. ___Wrap___ your ___app___ by ___BrowserRouter___ form ___react-router-dom___
3. Set up ___routes___
4. ___Link - Active Link - useNavigate() - route parameter___
5. ___Authentication___ 


### `Firebase:`

1. ___Firebase Authentication___
2. ___Login System___ (google, github, facebook, twitter, Email/Password)


### `Responsive React Website:`

1. Make a Responsive React Website by using ___Media Query___
2. Make a Responsive React Website by using ___Plain Bootstrap___
3. Make a Responsive React Website by using ___React Bootstrap___


### `Conceptual Session:`

1. Integrate the ___Authentication System___ (steps)
2. Watch again until the concepts is clear
3. Try to catch the (main) ___concepts of particular topics___ by hardWork.


### `Conclusion:`

1. ___React___ Concepts
2. ___React-Router___ Concepts
3. ___Responsive___ React Website
4. ___Firebase___ Concepts

**[🔼Back to Top](#table-of-contents)**

## 60.2 Create Project Component setup and router setup

### `Basic Project Setup:`

- ___Create React App___
- Create a ___Firebase project___ and ___Register___ my app
- Install the ___SDK___ and ___initialize Firebase___
  - Install Firebase & Firebase Setup
- Install ___React Router___ & React Router ___Setup___
- Create basic ___Components___ such as Home, Header, Login, NotFound
- ____redirects___ file added
- Create ___markdown___ file for documentation
- ___CSS style___ added

---

### `If Clone any React Project:` (Need to follow some ___steps___)

1. `npm install` for ___node_modules___ folder, it installs all the ___dependency___ of this project.
2. Create a ___new Repository___ 
3. `git remote -v` (___to check remote URL___)
   - It ___push___ all the ___commits___ in `https://github.com/ProgrammingHero1/eme-john-with-router-module-53.git` (It ___points___ to this repository)
4. But I want to ___push___ all my ___commits___ in ___new Repository___
   - ___set-url___ not add ___command___ `git remote set-url origin https://github.com/ProgrammingHero1/ema-john-simple-with-auth-module-59.git`
5. `git remote -v` (___to check remote URL___)
   - It ___points___ `https://github.com/ProgrammingHero1/ema-john-simple-with-auth-module-59.git` right now
6. Now we can use ___git___ in a ___regular ways___.
   - `git add .`
   - `git commit -m "initial firebase setup"`
   - `git push`
   - `git status`

---

### `Authentication Steps or Auth_steps:`

1. Create a ___new firebase project___ in ___console.firebase.google.com___
2. ___Register app___
3. `npm install firebase`
4. Create `firebase.init.js` file and ___import___ `getAuth` to ___export___ `auth`
5. Firebase settings > Authentication > ___Enable___ Email/Password ___auth___
6. ___Create___ Login, SignUp component, ___setup route___
7. Attach ___form field handler___ and form ___submit handler___
8. `npm install --save react-firebase-hooks`
9. ___useCreateUserWithEmailAndPassword___ for create user from ___react-firebase-hooks___
10. If user is ___created___, then ___redirect___ to the expected page
11. ___useSignInWithEmailAndPassword___ for SignIn/LogIn from ___react-firebase-hooks___
12. If user is ___LoggedIn___, then ___redirect___ to the expected page
13. Create ___RequireAuth___ and ___Navigate___ from location
    - Check ___user exists___ and also ___tract user location___
14. In route, ___wrap protected component___ by using ___RequireAuth___ component

---

### `Firebase Hosting/Deploy Steps:` (for ___1st time___) 

&nbsp;&nbsp;&nbsp;(___Hosting > Get Started___)

1. ___Install Firebase CLI___ 
   - `npm install -g firebase-tools` (___one time___ for your ___computer___)
2. ___Initialize your Project___
   - `firebase login` (___one time___ for your ___computer___)
     - `Y` > Select Google Account > `Allow` > ___Firebase CLI___ Login Successful
   - `firebase init` (___one time___ for ___each project___) (___Some questions need to face___)
     - Are you ready to proceed? (Y/n) <br /> > `Y`
     - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `SpaceBar` to select or unselect)
     - Use an existing project <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `Enter`)
     - Select an existing project like `ema-john-simple-447ad` <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `Enter`)
     - What do you want to use as your public directory? (public) <br /> > write `build` > (press `Enter`)
     - Configure as a single-page app (rewrite all urls to /index.html)? (y/N) <br /> > `y`
     - Set up automatic builds and deploys with GitHub? (y/N) <br /> > `N`
     - File build/index.html already exists. Overwrite? (y/N) <br /> > `N` <br /> ___Firebase initialization complete!___
3. ___Build your project___ according to ___latest change___ 
   - `npm run build` (___every time___ you want to ___deploy___)
4. ___Deploy to Firebase Hosting___
   - `firebase deploy` (___every time___ you want to ___deploy___)

> `Note:` It could be needed in the deployment process time.

---

### `Firebase Hosting/Deploy Steps:` (for ___2nd/multiple times___)

1. `npm run build`
2. `firebase deploy`

**[🔼Back to Top](#table-of-contents)**

## 60.3 Collect, Edit, Optimize and host images for your website

### `Image Resources:`

1. [freepik](https://www.freepik.com/ "freepik - illustration") - illustration
2. [Unsplash](https://unsplash.com/ "Unsplash - free images & pictures") - free images & pictures
3. [Photopea](https://www.photopea.com/ "Photopea - resize images") - resize images
4. [TinyPNG](https://tinypng.com/ "TinyPNG - compress or optimize images") - compress/optimize images
5. [ImgBB](https://imgbb.com/ "ImgBB - free image hosting | Upload and share your images") - free image hosting

``` JavaScript
import carService from '../../../images/car-service.jpg';

const services = [
   { id: 1, name: 'oil change', price: 100, description: '', img: carService },
   { id: 1, name: 'oil change', price: 100, description: '', img: 'https://i.ibb.co/dGDkr4v/1.jpg' }
]
```
> `Note:` We ___can't covert___ direct image to a ___JSON format___ because image information will be remove. That's why we should use ___image link___. <br /> [ImgBB](https://imgbb.com/ "ImgBB - free image hosting | Upload and share your images") is a ___free image hosting___ website. We can ___upload and share___ own images with other or use to make ___custom data purposes___.

**[🔼Back to Top](#table-of-contents)**

## 60.4 Load fake data map services to display single services

### `Load & display Data:`

- [services.json](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/01genius-car-services/public/services.json "Fake Data of services") - [Services.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/01genius-car-services/src/Pages/Home/Services/Services.js "Services Component") - [Service.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/01genius-car-services/src/Pages/Home/Service/Service.js "Service Component")


## 60.5 Make Services Responsive using CSS media query

### `CSS Media Query:` (___Vanilla CSS___) (___sample___)

``` JavaScript
@media only screen and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/
}
@media only screen and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/
}
@media only screen and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
}
```

### `Make services Responsive:` (___according to Bootstrap___)

``` JavaScript
/* Extra-small */
@media only screen and (max-width: 576px) {

}
/* Small */
@media only screen and (min-width: 577px) and (max-width: 768px) {
    
}
/* Medium */
@media only screen and (min-width: 769px) and (max-width: 992px) {
    
}
/* Large */
@media only screen and (min-width: 993px) and (max-width: 1200px) {
    
}
/* X-Large */
@media only screen and (min-width: 1201px) and (max-width: 1400px) {
    
}
/* XX-Large */
@media only screen and (min-width: 1401px) {
    
}
```

### `Examples:`

``` JavaScript
/* small */
@media only screen and (max-width: 576px) {
    .services-container {
        grid-template-columns: repeat(1, 1fr);
    }
}
/* Medium */
@media only screen and (min-width: 577px) and (max-width: 992px) {
    .services-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
/* Large */
@media only screen and (min-width: 993px) and (max-width: 1400px) {
    .services-container {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

**[🔼Back to Top](#table-of-contents)**

## 60.6 Build Responsive React website using Bootstrap

### `Using Bootstrap:`
- ___Bootstrap CDN link___
- ___Grid___
- ___Card___
- ___Gutters___

**[🔼Back to Top](#table-of-contents)**

## 60.7 React Bootstrap for responsive and image slider, banner

### `Using React-Bootstrap:`
- ___Install React-Bootstrap___
- ___Carousels___
- [React Carousel libraries](https://react.libhunt.com/libs/carousel) | [14 Top React Carousel Components](https://alvarotrigo.com/blog/react-carousels/) | [10 Best React Carousel Libraries](https://openbase.com/categories/js/best-react-carousel-libraries)

**[🔼Back to Top](#table-of-contents)**

## 60.8 Module Summary, Add navbar and set footer dynamic date

``` JavaScript
// In Footer.js

const Footer = () => {
   // Get year value dynamically
   const year = new Date().getFullYear();
   return (
      <footer>
         <p><small>&copy;copyright reserved by Crescent_Partha in {year}</small></p>
      </footer>
   );
};
```

### `Header using React-Bootstrap & React-Router:`

``` JavaScript
// In Header.js

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" fixed="top" >
                <Container className='d-flex flex-row justify-content-evenly align-items-center p-2'>
                    <Navbar.Brand>
                        <Link to='/home'><img src={logo} height='30' alt='' /></Link>
                    </Navbar.Brand>
                    <Nav className="me-auto d-flex flex-row justify-content-evenly align-items-center">
                        <Link className='text-white text-decoration-none' to='/home'>Home</Link>
                        <Link className='text-white text-decoration-none mx-2' to='/notFound'>Not Found</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
```

**[🔼Back to Top](#table-of-contents)**

## Quiz

1. ___How many columns___ will be there? 
   - `4`
``` CSS
grid {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
}
```
2. `Height` and `width` ___can not be set___ in_____
   - `inline element`
3. How will you ___add blue color___ to all paragraph tags? 
   - `p { color: blue; }`
4. How would you ___apply style___ only to the ___second paragraph___ below?
   - `#goat`
``` HTML
<p>I am your ex</p>
<p id=”goat”> I am your next </p>
```
5. What ___style value___ will you write to put the ___text in the middle___ of the page? 
   - `text-align: center;`
6. Apply ___20px margin___ on the ___left and right___ side and ___10px___ on the ___top and bottom___ side of the elements with shundori class:
   - `10px 20px;`
``` HTML
.shundori {
	margin: ___?___
}

<h1 class=”title”>Awesome Heading</h1>
```
7. What is a ___universal selector___? (google it)
   - `Selects all the elements` 
     - `*` is the universal selector
8. How would you ___add___ I Love you ___before all the paragraphs___?
   - `p::before`
``` JavaScript
<style> 
___________{
	content: “I Love you”;
}
</style>
```
9. Which ___flex property___ will you use to flex items on ___multiple lines___ when the ___screen size shrinks___?
   - `flex-wrap`
10. Which ___flex property___ will you use to flex items along the ___y-axis___ when the ___flex-direction___ is set to ___row___?
    - `align-items`
11. What is true about justify-content: space-evenly? 
    - `Items have equal space around them`
12. Which one is true about ___CSS modules___? 
    - [ ] ___CSS Modules let you use the same CSS class name in different files.___
    - [ ] ___CSS module creates a random class name.___
    - [ ] You cannot use the same class name while using CSS Modules.
    - [x] 1 & 2
13. What is the ___class infix___ of ___extra small___ screen size in react-bootstrap?
    - [ ] xs
    - [ ] xxs
    - [ ] sx
    - [x] ___None___
14. In react-bootstrap ___grid layout___ how would you ___size columns___ based on the ___natural width of their content___?
    - [ ] fluid
    - [x] ___auto___
    - [ ] flexible
    - [ ] 100
    - [ ] flex
``` JavaScript
<Col md="___?___">Variable width content</Col>
```
15. Which one will be the ___first___ in ___order___?
    - [ ] Banana
    - [x] ___Apple___
    - [ ] Mango
``` JavaScript
<Container>
   <Row>
      <Col xs={{ order: 3 }}>Banana</Col>
      <Col xs>Apple</Col>
      <Col xs={{ order: 1 }}>Mango</Col>
   </Row>
</Container>
```

**[🔼Back to Top](#table-of-contents)**

<br /> <br />

# Module 60.5: Firebase auth and private Route Recap

## 60.5.1 Firebase auth and private Route Recap

### `Google Authentication with react-firebase-hooks:`

``` JavaScript
// Login.js 

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const from = location.state?.from?.pathname || '/';

    if (googleUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleUserSignIn}>
                    {
                        googleLoading
                        &&
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                    }
                    {
                        googleError && <p style={{color: 'red'}}>{googleError.message}</p>
                    }
                </form>
                <div className="third-party-auth">
                    <button onClick={() => signInWithGoogle()}>
                        <img src={google} alt="google icon" />
                        <span>Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
```

``` JavaScript
// SignUp.js

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';

const SignUp = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const from = location.state?.from?.pathname || '/';

    if (googleUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser}>
                    {
                        googleLoading
                        &&
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        googleError && <p style={{color: 'red'}}>{googleError.message}</p>
                    }
                </form>
                <div className='third-party-auth'>
                    <button onClick={() => signInWithGoogle()}>
                        <img src={google} alt="google icon" />
                        <span>Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
```

**[🔼Back to Top](#table-of-contents)**

## 60.5.2 Practice Firebase Authentication, Implement Twitter Authentication with react-firebase-hooks

### `Steps to use firebase & (Twitter Authentication):` (___Twitter Sign-in Provider___)

&nbsp;&nbsp;&nbsp;(___Recommended to Follow these 09 Steps___)

1. Create a ___new firebase project___ in ___console.firebase.google.com___
2. ___Register app___
3. `npm install firebase`
4. Create `firebase.init.js` file and ___import___ `getAuth` to ___export___ `auth`
5. Firebase settings > Authentication > Sign-in Method > Add new Provider > ___Enable___ Twitter ___authentication___
    - `In Firebase:` 
      - Paste (___App Key___ & ___App Secret___) > Copy (___callback URI___ to your Twitter app configuration) > ___Save___
    - `In Developers Twitter: `
      - [developer.twitter.com](https://developer.twitter.com/en) > Sign up > Overview > Add App > Development (next) > App name (next) > Copy & paste (API Key & API Key Secret) in (firebase auth Provider) > App settings > ___Edit___ Authentication settings > ___Enable___ 3-legged OAuth > Copy & Paste ___Callback URLs___ > Paste ___Website URL___ > ___Save___
    - One account per email address (___if___ you need to create multiple user with same email address by using multiple sign in methods)<br />It ___should not be used___ in real application.
6. ___Create___ Login, SignUp component, ___setup route___
7. Attach ___form field handler___ and form ___submit handler___
8. `npm install --save react-firebase-hooks`
9. react-firebase-hooks > Authentication Hooks > [Social Login Example](https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#social-login-example "Follow the Social Login Example Code")
   
``` JavaScript
// Login.js

import { useSignInWithTwitter } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithTwitter, TwitterUser, TwitterLoading, TwitterError] = useSignInWithTwitter(auth);

    const from = location.state?.from?.pathname || '/';

    if (TwitterUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleUserSignIn}>
                    {
                        TwitterLoading
                        &&
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                    }
                    {
                        TwitterError && <p style={{color: 'red'}}>{TwitterError.message}</p>
                    }
                </form>
                <div className="third-party-auth">
                    <button onClick={() => signInWithTwitter()}>
                        <img src={twitter} alt="twitter icon" />
                        <span>Twitter</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
```

⫸ `Note:` ___We can remove Twitter Permission___

⫸ `Add Authorized Domains:` (otherwise app doesn't work properly)

- __In Firebase:__
  - Authentication → Settings → Add Domain → `https://genius-car-services-a8da0.web.app/` (It will be the ___Homepage URL___ | ___App URL___)

**[🔼Back to Top](#table-of-contents)**

<br /> <br />

# Module 61: React Router and Firebase Auth Recap

## 61.1 Responsive Header Component - sticky top

``` JavaScript
// In Header.js

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container className='text-center'>
                    <Navbar.Brand as={Link} to="/">
                        <img height={35} width={120} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="home#experts">Experts</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <button className='border border-light border-opacity-25 rounded text-light text-uppercase fw-normal bg-primary' onClick={logout}>Sign Out</button>
                                :
                                    <>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        {/* <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link> */}
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
```

**[🔼Back to Top](#table-of-contents)**

## 61.2 Setup Dynamic Route and Access route params

### `Reading URL Params (Steps):` (___Setup:___ `route` - `parameter-&-click` - `getId`) 

1. ___Set Nested Route___ inside of the App route (___route___)
2. ___Set navigate___ in EventHandler (___parameter-&-click___)
3. ___Get invoiceId___ by useParams(); (___getId___)


> `Notes:` <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⫸ Implement `Dynamic Route` for the ___single product___ of ___Services___

--- 

#### `01. Set Nested Route:` (___route___)

``` JavaScript
// In App.js

import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceDetailId' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
```

#### `02. Set navigate:` (___parameter-&-click___)

``` JavaScript
// In Service.js

import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const handleNavigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <button onClick={() => handleNavigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;
```

#### `03. Get invoiceId:` (___getId___)

``` JavaScript
// In ServiceDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceDetailId} = useParams();
    return (
        <div>
            <h2 className='text-center m-5'>Welcome to ServiceDetail: <span className='text-primary'>{serviceDetailId}</span></h2>
        </div>
    );
};

export default ServiceDetail;
```

**[🔼Back to Top](#table-of-contents)**

## 61.6 (optional) Environment variable for Firebase in Create React App | Get form data in 3 different ways

### `Get Form data in 3 different ways:`
1. ___State declare & onBlur EventHandler___
2. ___useRef hook___
3. ___event.target.email.value___

- [Login.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/01genius-car-services/src/Pages/Login/Login.js "Demo_Code: Get form data using State declare & onBlur EventHandler | Login.js - genius-car-services") (from ___genius-car-services___)

``` JavaScript
// 1st way
import React, { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <form onSubmit={handleUserSignIn}>
            <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
            <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
        </form>
    );
};
export default Login;
```

- [Login.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/SinglePage/Login/Login.js "Demo_Code: Get form data using useRef hook | Login.js - trivago-booking") (from ___trivago-booking___)

``` JavaScript
// 2nd way
import React, { useRef } from 'react';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
    }
    return (
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
    );
};
export default Login;
```

- [SignUp.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/SinglePage/SignUp/SignUp.js "Demo_Code: Get form data using event.target.password.value | SignUp.js - trivago-booking") (from ___trivago-booking___)

``` JavaScript
// 3rd way
const handleRegister = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);
    // Then you can go to the validation process
}
```

---

### [`Adding Custom Environment Variables:`](https://create-react-app.dev/docs/adding-custom-environment-variables/ "Create React App Environment Variables - create-react-app.dev") (___Set Environment Variables___ for Firebase Config)

- Environment variables start/___declare___ with `REACT_APP_` like `REACT_APP_apiKey` 
- Get ___access___ environment variables `process.env.` like `process.env.REACT_APP_apiKey`
- Need to ___create a file___ in the ___root___ (___aside package.json___) of your project, ___start with___ `.env.` like `.env.local` or `.env.development.local` or `.env.test.local` or `.env.production.local` etc.
- Set `REACT_APP_environmentVariable=value` (set ___all the value___ in this format from ___firebaseConfig___ file)
  - `REACT_APP_apiKey=AIzaSyA2HadiuwqN7w-YroNe76VS8dVLMbmU1_o`
- Set `apiKey:process.env.REACT_APP_apiKey,` instead of `apiKey: "AIzaSyA2HadiuwqN7w-YroNe76VS8dVLMbmU1_o",` in ___firebaseConfig___ file


### `Without setup Environment Variables for Firebase Configuration:`

``` JavaScript
// In firebase.inti.js (Without Environment Variable)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzgkoX3nvHU_YpvGKWcucdui84gyQxZYg",
  authDomain: "genius-car-services-a8da0.firebaseapp.com",
  projectId: "genius-car-services-a8da0",
  storageBucket: "genius-car-services-a8da0.appspot.com",
  messagingSenderId: "386426605141",
  appId: "1:386426605141:web:6767f2232f4e1e60304edc"
};
```

### `Set Environment Variables for Firebase Configuration in Create React App:`

``` JavaScript
// In .env.local

REACT_APP_apiKey=AIzaSyDzgkoX3nvHU_YpvGKWcucdui84gyQxZYg
REACT_APP_authDomain=genius-car-services-a8da0.firebaseapp.com
REACT_APP_projectId=genius-car-services-a8da0
REACT_APP_storageBucket=genius-car-services-a8da0.appspot.com
REACT_APP_messagingSenderId=386426605141
REACT_APP_appId=1:386426605141:web:6767f2232f4e1e60304edc
```

``` JavaScript
// In firebase.inti.js

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};
```

### `After Setup Environment Variable:` (___run___ `npm start`, otherwise get some ___Error___)

``` Terminal
npm start
```

> ⫸ `Notes:` <br /> &nbsp;&nbsp;&nbsp;&nbsp; ▶ `.env.local` looks like ___dim___, that means it will be `.gitignore` file. So, it ___doesn't go___ to the ___gitHub repo___. <br /> &nbsp;&nbsp;&nbsp;&nbsp; ▶ In `firebase.init.js` file, `id` ___don't go directly___, although we can get these `value` by a harder process. But it is `90% safe process` to ___hide___ Firebase configuration.

---

### `Some Error are showing below:` (you could get this kind of error, if ___not run___ `npm start`)
- `Uncaught FirebaseError: Firebase: Error (auth/invalid-api-key).`

``` JavaScript
assert.ts:128 Uncaught FirebaseError: Firebase: Error (auth/invalid-api-key).
    at createErrorInternal (assert.ts:128:1)
    at _assert (assert.ts:153:1)
    at register.ts:67:1
    at Component.instanceFactory (register.ts:90:1)
    at Provider.getOrInitializeService (provider.ts:318:1)
    at Provider.initialize (provider.ts:242:1)
    at initializeAuth (initialize.ts:66:1)
    at getAuth (index.ts:44:1)
    at ./src/firebase.init.js (firebase.init.js:20:1)
    at options.factory (react refresh:6:1)
```

- `Solution:` (___But it doesn't work___)

``` JavaScript
try having the variable between "..."..like so {apiKey:"process.env.FIREBASE_API_KEY",}
```

- `After follow above solution, you could get new Error:`

``` JavaScript
https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=process.env.REACT_APP_apiKey 400
```

> ⫸ `Solution:` <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Only one solution is ___run___ `npm start`

---

### `KeyBoard Shortcut:`
1. `Shift + Alt + F` = ___alignment format___ in JavaScript file
2. `Tab` = for ___right alignment___
3. `Shift + Tab` = for ___left alignment___
4. `Home` = to go ___starting position___ of any line
5. `End` = to go ___ending position___ of any line
6. `Ctrl + Alt + ↑` = ___multi-cursor on___
   - `Alt + clicked` = ___multi-cursor on___ and ___multi-cursor off___
   - `Ctrl + →` = go to the ___last position___ of ___every word___ and then ___type___
7. `Shift + End` = ___select all___

---

### `Issue:` [Navigate to #id in Layout component - stack overflow](https://stackoverflow.com/questions/65646065/navigate-to-id-in-layout-component)

**[🔼Back to Top](#table-of-contents)**

<br /> <br />

# Module 63.5: Dynamic Title and Google Map

## 63.5.1 Set favicon and search for title to be displayed on the website

### `How to Find & Setup Favicon.ico`

⫸ ___Step by Step Implementation___

- ___Google Search___ like ___Car Mechanic icon___
- Images > ___Tools___ > ___Size___ (icon) > ___Usage Rights___ (Creative Commons licenses)
- Click image > Download 
- ___Photopea.com___ > Resize ___16:16___ > Download with ___ico extension___
- Rename to ___favicon.ico___ > paste in ___public___ folder in your project

### `Dynamic Title on your React App` (Resources & Information)

⫸ ___React-Router set title based on Route___ (keyword)

- [react router (react-router-dom) setting page title from current route (functional components)?](https://stackoverflow.com/questions/65705086/react-router-react-router-dom-setting-page-title-from-current-route-functiona "stackoverflow.com")
- [How to add a dynamic title on your React app](https://dev.to/luispa/how-to-add-a-dynamic-title-on-your-react-app-1l7k "dev.to")
- [2 Ways to Set Page Title Dynamically in React](https://www.kindacode.com/article/ways-to-set-page-title-dynamically-in-react/ "kindacode.com")

**[🔼Back to Top](#table-of-contents)**

## 63.5.2 Set Dynamic page title based on Route using react-helmet-async

- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async "npm react-helmet-async - website")

### `Install react-helmet-async` - (`Step-01`)

``` Terminal
npm i react-helmet-async
```

### `Wrap the index.js file` - (`Step-02`)

``` JavaScript
// In src/index.js

import { HelmetProvider } from 'react-helmet-async';

root.render(
  <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </HelmetProvider>
);
```

OR

``` JavaScript
// In src/index.js

import { HelmetProvider } from 'react-helmet-async';

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>
);
```

### `Set Helmet & title, where (In which Route) you want to use` - (`Step-03`)

``` JavaScript
// In About.js

import { Helmet } from 'react-helmet-async';

<div className='about-container'>
    <Helmet>
        <title>About - Genius Car Service</title>
    </Helmet>
    <h2 className='about-title'>Get in Touch with the Car Doctor Expert Team</h2>
</div>
```

> `Notes:` In this way, we need to set ___Helmet___ & ___title___ (`Make Repetition`) in every Route, where we want to display dynamic title. But, we can solve it in a ___two ways___.

---

### `Create a Component in Shared folder called PageTitle:` - (Simple `way-01`) - (`Step-03`)

``` JavaScript
// In PageTitle.js | Create Component

import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title} - Genius Car Service</title>
        </Helmet>
    );
};

export default PageTitle;
```

``` JavaScript
// In About.js | Import Component

import PageTitle from '../Shared/PageTitle/PageTitle';

<div className='about-container'>
    <PageTitle title="About"></PageTitle>
    <h2 className='about-title'>Get in Touch with the Car Doctor Expert Team</h2>
</div>
```

### `More Efficient:` - (`way-02`) - (`Step-03`)

- Create a component like RequireAuth called ___RouteWithTitle___
- In RouteWithTitle, Set ___Helmet & title___
- ___Replace___ Route by RouteWithTitle in App.js and ___pass the props___ like `title="Home"`
- Then, Others ___attribute___ like path, element need to ___pass___ to the Route component.
- In this way, We can ___reduce___ the ___duplication___ and ___increase___ the ___customization___ or ___optimization___.

**[🔼Back to Top](#table-of-contents)**

## 63.5.3 Do not allow protected route without email verification

### `Concepts of Email Verification` 

- If `user exists`, but Email `doesn't verify`, then We `don't give the entry/access` in our Protected Route.
- `Send verification email` to verify user email and secure access to protected route.
- Send verification email when user `Register`, `Sign-Up`, and Click the `Send Verification Email Again` Button.

### `Main Functionality` 

``` JavaScript
// In RequireAuth.js

import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (sending) {
        return <Loading></Loading>
    }

    if (error) {
        return <p className='text-danger'>{error.message}</p>
    }

    if (!user.emailVerified) {
        return <div className='m-5' style={{textAlign: 'center'}}>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'>Please, Verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
        </div>
    }

    return children;
};

export default RequireAuth;
```

### `Full Example`

``` JavaScript
// In RequireAuth.js

import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        return <p className='text-danger'>{error.message}</p>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

    if (!user.emailVerified) {
        return <div className='m-5' style={{textAlign: 'center'}}>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'>Please, Verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;
```

**[🔼Back to Top](#table-of-contents)**

## 63.5.4 How to display a location and a Marker on a Google Map

### `Maps Resources` (free and paid)

- [React Leaflet](https://react-leaflet.js.org/ "React Leaflet - with Open Source Project (Free)")
- [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api "Google Maps Library for React - with Paid API Key") | [React Google Maps Api Style Guide](https://react-google-maps-api-docs.netlify.app/ "Homepage - Style Guide of React Google Maps API")
  - We have to have an `API Key` (___Paid___ version)
  - ___As a user___, We can use Google Map free. But, ___as a developer___, We need to pay for it.
- [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key "Create Google Developer Profile | Buy API Key | Set Payment Gateway | etc.")
  - Search ___google map api key___ (keyword)
  - Create ___Google Developer Profile___ > Get Started > Clicked on ___Select a project___ 
  - If we don't ___set payment gateway___, then they don't give our API Key
  - ___Go To GOOGLE MAPS PLATFORM___ (to set direction, geo-location)
  - Set ___RESTRICT KEY___ (So that, others can't use my API Key)
  - Directions API > ___Enable___
  - Maps JavaScript API > ___Enable___

### `Install @react-google-maps/api`

``` Terminal
npm install --save @react-google-maps/api
```

### `Protect you Google API Key`

> `Notes:` Set API key in `.env.local` like `REACT_APP_GOOGLE_API_KEY=Your-API-Key`. Then, get API key by using `{process.env.REACT_APP_GOOGLE_API_KEY}`

### `Get your own location from Google_Map`

- Go to the ___Google Maps___ > Search ___Location___ > ___Right clicked___ on ___Location Icon___ (red color) > ___Copy___ (latitude and longitude)
- ___Set___ (latitude and longitude) in your Map as a ___Center___

### `Set My Location on Maps`

``` JavaScript
// In MyLocation.js

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    // width: '400px',
    width: '100vw',
    // height: '400px'
    height: '100vh'
};

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// Location of Sylhet
const center = {
    lat: 24.8998373,
    lng: 91.8259622
};

function MyComponent() {
    return (
        <LoadScript
            //   googleMapsApiKey="YOUR_API_KEY"
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                // zoom={10}
                zoom={16}
            >
                { /* Child components, such as markers, info windows, etc. */}
                {/* <></> */}
                <Marker
                    // onLoad={onLoad} // We can say anything using javaScript function;
                    // position={position} // Replace by center - center (position) is declared above
                    position={center}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)
```

> `Notes:` We can use `Marker`, `Polygon` etc in our location maps.

### `Set Directions`

- DirectionsRenderer and DirectionsService example > `VIEW CODE`
- In this example, We can understand that how to `extract code` from ___class component___ to ___functional component___

``` JavaScript
// In Direction.js

import React from 'react';
import { DirectionsService, DirectionsRenderer, GoogleMap, LoadScript } from '@react-google-maps/api';

const Direction = () => {
    return (
        <div>
            
        </div>
    );
};

export default Direction;
```

> `Notes:` If we want to use `Direction`. Then, we need to use ___DirectionsService___ and ___DirectionsRenderer___

**[🔼Back to Top](#table-of-contents)**

## 63.5.5 Display Dynamic Driving Direction and Route on Google Map

### `Set Directions`

``` JavaScript
// In Direction.js

import React, { useState } from 'react';
import { DirectionsService, DirectionsRenderer, GoogleMap, LoadScript } from '@react-google-maps/api';

const Direction = ({origin, destination}) => {
    const [response, setResponse] = useState(null);
    // const origin = 'mirpur 10 circle dhaka';
    // const destination = 'gulshan 1 circle dhaka';

    const directionsCallback = (res) => {
        console.log(res)

        if (res !== null) {
            if (res.status === 'OK') {
                setResponse(res);
            } else {
                console.log('response: ', res)
            }
        }
    }

    return (
        <div>
            <LoadScript
                //   googleMapsApiKey="YOUR_API_KEY"
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    // required
                    zoom={14}
                    // required
                    center={{
                        lat: 0,
                        lng: -180
                    }}
                >
                    {
                        (
                            destination !== '' &&
                            origin !== ''
                        ) && (
                            <DirectionsService
                                // required
                                options={{
                                    destination: destination,
                                    origin: origin,
                                    travelMode: 'DRIVING'
                                }}
                                // required
                                callback={directionsCallback}
                            />
                        )
                    }

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;
```

### `Take origin & destination input form user`

``` JavaScript
// In Map.js

import React, { useState } from 'react';
// import Direction from '../Direction/Direction';
// import MyLocation from '../MyLocation/MyLocation';

const Maps = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const displayDirection = event => {
        event.preventDefault();
        const start = event.target.origin.value;
        const end = event.target.destination.value;

        setOrigin(start);
        setDestination(end);

        // console.log(start, end);
    }
    return (
        <div>
            <h2 className='text-center my-4'>Google Maps</h2>
            <form onSubmit={displayDirection} className='d-flex flex-column w-25 m-4 mx-auto align-items-center'>
                <input type="text" name="origin" required />
                <br />
                <input type="text" name="destination" required />
                <br />
                <input type="submit" value="Show Direction" />
            </form>
            {/* <Direction origin={origin} destination={destination}></Direction> */}
            {/* <MyLocation></MyLocation> */}
        </div>
    );
};

export default Maps;
```

**[🔼Back to Top](#table-of-contents)**

<br /> <br />

# Module 66: Genius Car Node Mongo CRUD Recap

## 61.1 (Conceptual) Node, Mongo, React, Client, Server, Rest, CRUD

### `Technology Selection`

- ___Resources:___ [Client/Server Model Image](https://www.researchgate.net/profile/Agisilaos-Konidaris/publication/314474221/figure/fig1/AS:633794000347137@1528119673567/The-client-server-model-of-our-approach.png "Client/Server Model Image - researchgate.net") | [Three-Tier Architecture Image](https://www.researchgate.net/profile/Muhammad-Ashraf-52/publication/331373674/figure/fig3/AS:730820847353860@1551252676941/Three-tier-architecture-c-N-tier-architecture-N-tier-architecture-is-a-multi-tier.png "Client Server Architecture - Client Server Model")
- `Client-side:` HTML, CSS, JavaScript, `React`, Library and Framework etc
- `Server-side:` Python, PHT, `Node.js`, .Net etc
- `Database:` MySQL, PostgreSQL, `MongoDB`, MariaDB, Oracle, Firebase, AWS Hosting etc
  - ___SQL database vs NoSQL database___

> `Notes:` Every technology has some `pros and cons`. Every technology `serves different solutions`. So It is not mandatory that If we use `React` in client-side, then must use `Node.js` as a server-side and `MongoDB` as a database. What types of technology I used in my project that actually depends on `Project's size, volume, complexity, need and user interaction`.<br /><br /> In here, We use ___Node.js___ for `CRUD operations` and `REST API`.<br /> ___([CRUD](https://www.abaponhana.com/wp-content/uploads/2018/11/CRUD-operations.jpg "CRUD Operation - Image") = Create, Read, Update and Delete)___ <br /> ___(REST = Representational State Transfer)___ <br /> ___(REST API = RESTful API)___ <br /> ___(API = Application Programming Interface or web API)___ <br /><br /> ___Resources:___ [What is a REST API](https://www.redhat.com/en/topics/api/what-is-a-rest-api "What is a REST API - redhat.com") | [How Web Hosting works](https://www.roseindia.net/webhostingguide/How-Hosting-Server-works.jpg "How Web Hosting Works? - Image") | [Express.js](https://expressjs.com/ "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.")

**[🔼Back to Top](#table-of-contents)**

## 66.2 Setup simple node express server with dotenv

### `Clone project's Requirements`

> If we clone this project, then we need to `install dependencies` and set `.env.local` to implement `Environment Variables` for our firebase config. Otherwise, project doesn't work.

### `Basic Server Setup Steps`

#### `Create Directory`

``` Terminal
mkdir 02genius-car-services-server
cd 02genius-car-services-server
code .
```

#### `Create package.json file`

``` Terminal
npm init -y
```

``` JSON
{
  "name": "02genius-car-services-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

#### `Install Express, CORS, MongoDB, dotenv`

- [dotenv](https://www.npmjs.com/package/dotenv "dotenv - npmjs.com")
  - ___Dotenv___ is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.
  - Storing configuration in the environment separate from code is based on `The Twelve-Factor App` methodology.

``` Terminal
npm i express cors mongodb dotenv
```

#### `Install nodemon` (one time for each computer)

- `-g` flag stands for global | we can find it anywhere in our computer when we use `-g` flag
- One time for each computer if we use `-g` flag

``` Terminal
npm install -g nodemon
```

#### `Modify scripts of package.json file`

- `"start": "node index.js",` should be added
- `"start-dev": "nodemon index.js",` should be added

``` JSON
// Before
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

``` JSON
// After adding the script
"scripts": {
    "start": "node index.js",
    "start-dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

#### `Steps for Express/Node server` (in index.js)

- Create `index.js` file
  1. require express
  2. create app variable
  3. declare port
  4. set app.get('/', ...)
  5. listen to port

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running Genius Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

#### `Set middleware`

``` JavaScript
const cors = require('cors');

// use middleware
app.use(cors()); // for 'Access-Control-Allow-Origin'; // without it, communication doesn't established between 3000 and 5000;
app.use(express.json()); // To parse body (req.body) // without it, don't get data on req.body
```

#### `import and configure dotenv:`

``` JavaScript
// In index.js

require('dotenv').config();
```

#### `Set .gitignore for node project`

- Create `.gitignore` file and include `node_modules` inside the `.gitignore` file.
- It will ignore the `node_modules` folder when I push commits to github.

``` .gitignore
// In .gitignore

node_modules
```

> `Notes:` If you don't create `.gitignore` file before run 1st `push` command, then `node_modules` folder won't be ignored.

#### `Create a .env file in the root of your project`

- ___Where is root?___
  - Where `package.json` file exists.
- Create `.gitignore` file and include `.env` inside the `.gitignore` file.
- It will ignore the `.env` file when I push commits to github.

``` .gitignore
// In .gitignore

node_modules
.env
```

> `Notes:` If you don't create `.gitignore` file before run 1st `push` command, then `.env` file won't be ignored.

#### `Run Node server or Backend server`

- If we run `npm run start-dev` command, then it executes `nodemon index.js` command.
- In contrast, we can run directly `nodemon index.js` command

``` Terminal
npm run start-dev

// OR

nodemon index.js
```

**[🔼Back to Top](#table-of-contents)**

## 66.3 Connect to database with secure password on environment variable

### `Create a Database inside the previous Cluster`

- Database Deployments > Browse Collections (___Cluster0___)> Create Database > database name (___geniusCar___) > collection name (___service___) > Create

### `Insert Data on MongoDB Database`

- Collection name (___service___) > ___INSERT DOCUMENT___ > Paste ___JSON data without id attribute___ (mongodb automatically gives `_id` attribute) > Insert

``` JSON
[
    {
        "name": "ENGINE DIAGNOSTIC",
        "price": "300",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/dGDkr4v/1.jpg"
    },
    {
        "name": "WHEEL ALIGNMENT",
        "price": "100",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/tY8dmnP/2.jpg"
    },
    {
        "name": "OIL CHANGING",
        "price": "150",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/Yh04YVw/3.jpg"
    },
    {
        "name": "BRAKE REPARING",
        "price": "180",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/ZX2Cbkn/4.jpg"
    },
    {
        "name": "WASH AND GLASSING",
        "price": "100",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/FgQ3jXp/5.jpg"
    },
    {
        "name": "COMPLETE ANALYSIS",
        "price": "300",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa",
        "img": "https://i.ibb.co/zJy5ZDd/6.jpg"
    },
    {
        "name": "CAR SERVICE",
        "price": "500",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa",
        "img": "https://i.ibb.co/S624Z3D/car-service.webp"
    },
    {
        "name": "AUTO SERVICE",
        "price": "400",
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa",
        "img": "https://i.ibb.co/wNZy7k8/auto-service.webp"
    }
]
```
### `Connection Setup with Database` (Find multiple user)

- MongoDB Documentation > Usage Examples > Find Operations > [Find Multiple Documents](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/ "Find Multiple Documents - mongodb.com")

### `How to get connection string from MongoDB Database`

- ___Database___ > ___Connect___ (from ___Cluster0___)> Connect your application > Include full driver code example (___Selected___ to get full Code) > ___Copy & Paste___ in index.js

``` JavaScript
// In index.js

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Genius Car DB Connected');
  // perform actions on the collection object
  client.close();
});
```

### `How to get password from MongoDB`

- ___Database Access___ > Edit (password) or ___ADD NEW DATABASE USER___ > Username (___geniusUser___) > Autogenerate password (___WfRnZQmYC5To03nC___) > Copy & Paste in `.env` file > get Username & Password by `${process.env.DB_USER}` and `${process.env.DB_PASS}` format

``` .env
DB_USER=geniusUser
DB_PASS=WfRnZQmYC5To03nC
```

### `Full Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Genius Car DB Connected');
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
    res.send('Running Genius Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

## 66.4 Load all services and create single service API

### `Data Load from Database`

- MongoDB Documentation > Usage Examples > Find Operations > [Find Multiple Documents](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/ "Find Multiple Documents - mongodb.com")
- MongoDB Documentation > Usage Examples > Find Operations > [Find a Document](https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/ "Find a Document - mongodb.com")
- `client.connect` section, we will do it as a `async-await system`, We don't do it as a `callback system pattern`.
- [MongoServerError: user is not allowed to do action [find] on [genius-car.service]](https://stackoverflow.com/questions/73560873/mongoservererror-user-is-not-allowed-to-do-action-find-on-genius-car-service "stackoverflow.com")
  - Database Access > Database Users > ___EDIT___ actions for certain user > Specific Privileges > Add Specific Privilege > ___readWriteAnyDatabase___ (Select Role) > Update User

### `All services data Load from Database`

``` JavaScript
// In index.js | Multiple Documents load from Database

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');

        // get all services json data
        app.get('/service', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

### `Particular service data Load from Database`

``` JavaScript
// In index.js | single Document load from Database

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');

        // load particular service data (id-wise)
        app.get('/service/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const service = await serviceCollection.findOne(query);
            res.send(service);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

### `Full Example` (Load particular service data & all services data from Database)

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');

        // get all services json data
        app.get('/service', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

        // load particular service data (id-wise)
        app.get('/service/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const service = await serviceCollection.findOne(query);
            res.send(service);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running Genius Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

### `Modified Client-side Code`

> We need to change ___fakeData Load___ to ___server-side___ `url` & ___id___ to `_id`, because, MongoDB uses `_id` instead of `id` attribute. <br /><br /> `services.json` ⋙ `http://localhost:5000/service` || `id` ⋙ `_id`

``` JavaScript
// In Services.js

fetch('http://localhost:5000/service')
key={service._id}
```

``` JavaScript
// In Service.js

const {_id, name, img, description, price} = service;
<button onClick={() => handleNavigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
```

### `Full Example` (Modified Client-side Code)

``` JavaScript
// In Services.js

import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id="services">
            <h1 className='services-title'>Our Services: <span>{services.length}</span></h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
```

``` JavaScript
// In Service.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id, name, img, description, price} = service;
    const navigate = useNavigate();
    const handleNavigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleNavigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;
```

**[🔼Back to Top](#table-of-contents)**

## 66.5 Load single Service, Use React hook form to add service

### `Module-wise Task list`

- Particular (___id-wise___) data load in ServiceDetail.js component
- ___Verify Email:___ Only for ___password___
- Create ___AddService.js___ component
- Use ___react-hook-form___ to ___add service___ in AddService.js component
- ___Setup Route___ with RequireAuth
- ___AddService___ added as a ___Add Route___ to the Header component

### `Particular (id-wise) data load in ServiceDetail.js component`

``` JavaScript
// In ServiceDetail.js

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceDetailId} = useParams();
    const [service, setService] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/service/${serviceDetailId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));

    }, [serviceDetailId]);

    return (
        <div>
            <h2 className='text-center m-5'>You are about to book: <span className='text-primary'>{service.name}</span></h2>
            <div className='text-center mb-5'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
```

### `Verify Email: Only for password`

``` JavaScript
// In RequireAuth.js

// console.log(user);
if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return <div className='m-5' style={{textAlign: 'center'}}>
        <h3 className='text-danger'>Your Email is not verified!!</h3>
        <h5 className='text-success'>Please, Verify your email address</h5>
        <button
            className='btn btn-primary'
            onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
            }}
        >
            Send Verification Email Again
        </button>
        <ToastContainer></ToastContainer>
    </div>
}
```

### `Create AddService.js component and Use react-hook-form to add service`

``` JavaScript
// AddService.js

import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2>Please add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
```

### `Setup Route with RequireAuth`

``` JavaScript
// In App.js

import AddService from './Pages/AddService/AddService';

<Route path='/addService' element={
    <RequireAuth>
    <AddService></AddService>
    </RequireAuth>
}></Route>
```

### `AddService added as a Add Route to the Header component`

``` JavaScript
// In Header.js

<Nav.Link as={Link} to="/addService">Add-Service</Nav.Link>
```

**[🔼Back to Top](#table-of-contents)**

## 66.6 Insert Service data to the mongodb cloud database

### `Module-wise Task list`

- Modified ___AddService.js___ component
- ___POST___ a service from ___server-side to database___
- ___POST___ a service from ___client-side to server-side___
- ___Full Code Example___

### `Modified AddService.js component`

``` JavaScript
// In AddService.js

<div className='w-50 mx-auto my-5'>
    <h2 className='text-center'>Please add a service</h2>
    <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
        <textarea placeholder='Description' {...register("description", { required: true })} />
        <input placeholder='Price' type="number" {...register("price", { required: true })} />
        <input placeholder='Photo URL' type="text" {...register("img", { required: true })} />
        <input type="submit" value="Add Service" />
    </form>
</div>
```

### `POST a service from server-side to database`

``` JavaScript
// In index.js

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');

        // POST a service from server-side to database
        app.post('/service', async(req, res) => {
            const newService = req.body;
            console.log('Adding new service', newService);
            const result = await serviceCollection.insertOne(newService);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

### `POST a service from client-side to server-side`

``` JavaScript
// In AddService.js

const onSubmit = data => {
    console.log(data);

    // POST a service from client-side to database
    const url = `http://localhost:5000/service`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
    })
};

<form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
```

### `Full Code Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');

        // get all services json data
        app.get('/service', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

        // load particular service data (id-wise)
        app.get('/service/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const service = await serviceCollection.findOne(query);
            res.send(service);
        });

        // POST a service from server-side to database
        app.post('/service', async(req, res) => {
            const newService = req.body;
            console.log('Adding new service', newService);
            const result = await serviceCollection.insertOne(newService);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running Genius Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

``` JavaScript
// In AddService.js

import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        // POST a service from client-side to database
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Please add a service</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' {...register("description", { required: true })} />
                <input placeholder='Price' type="number" {...register("price", { required: true })} />
                <input placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;
```

**[🔼Back to Top](#table-of-contents)**

## 66.7 Manage Services and explore delete api

### `Module-wise Task list`

- Create a ___ManageServices.js___ component
- ___Setup Route___ with RequireAuth
- ___ManageServices___ added as a ___Manage Route___ to the Header component
- Create a ___custom hook___ called ___useServices.js___
- ___DELETE a service___ from ___server-side to database___
- ___DELETE a service___ from ___client-side___
- ___Full Code Example___

### `Create a ManageServices.js component`

``` JavaScript
// In ManageServices.js
```

### `Setup Route with RequireAuth`

``` JavaScript
// In App.js

import ManageServices from './Pages/ManageServices/ManageServices';

<Route path='/manageService' element={
    <RequireAuth>
    <ManageServices></ManageServices>
    </RequireAuth>
}></Route>
```

### `ManageServices added as a Manage Route to the Header component`

``` JavaScript
// In Header.js

<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="home#services">Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="home#experts">Experts</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/googleMaps">Maps</Nav.Link>
    </Nav>
    <Nav>
        {
            user && 
            <>
                <Nav.Link as={Link} to="/addService">Add</Nav.Link>
                <Nav.Link as={Link} to="/manageService">Manage</Nav.Link>
            </>
        }
    </Nav>
</Navbar.Collapse>
```

### `Create a custom hook called useServices.js`

``` JavaScript
// In useServices.js

import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return [services, setServices];
}

export default useServices;
```

### `DELETE a service from server-side to database`

``` JavaScript
// In index.js

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');

        // DELETE a service from server-side to database
        app.delete('/service/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await serviceCollection.deleteOne(query);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

### `DELETE a service from client-side`

``` JavaScript
// In ManageServices.js

import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            // delete a service in client-side and send to the server-side
            console.log('Deleting service with id, ', id);
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    console.log('Deleted');
                    // remove deleted service from the state in client-side for better user experience
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;
```

### `Full Code Example`

``` JavaScript
// In index.js

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i9tckrt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');

        // get all services json data
        app.get('/service', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

        // load particular service data (id-wise)
        app.get('/service/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const service = await serviceCollection.findOne(query);
            res.send(service);
        });

        // POST a service from server-side to database
        app.post('/service', async(req, res) => {
            const newService = req.body;
            console.log('Adding new service', newService);
            const result = await serviceCollection.insertOne(newService);
            res.send(result);
        });

        // DELETE a service from server-side to database
        app.delete('/service/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await serviceCollection.deleteOne(query);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running Genius Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
```

**[🔼Back to Top](#table-of-contents)**

## 66.8 Module Summary and git push

### `Module Tast List`

⫸ ___In Server-Side:___

- How to ___create a service___ like `app.get('/service', ...)`
- ___Insert JSON data___ to database
- ___Id-wise data load___ from database
- How to ___create a new service data___ and send to the database
- How to ___delete a old service data___

⫸ ___In Client-Side:___

- Create a ___custom hook___ for ___data loading___
- ___Data load___ in ServiceDetail
- ___Data delete___ from ManageServices
- Set ___Email Validation___ only for ___password___

### `Clone Repository`

> `Notes:` If you clone this repository, this project doesn't work. Because, We need to create ___Environment Variables___ like ___DB_USER___ & ___DB_PASS___ in ___.env___ file and also need to install all the ___dependencies___. 

**[🔼Back to Top](#table-of-contents)**

## Quiz 66

1. What is ___express.js___? (google it)
   - `minimalist web framework for Node.js`
2. Which command will you ___run to restart your server___ after making some changes?
   - `npm start-dev`
``` JSON
{
    "start": "node index.js"
    "start-dev": "nodemon index.js" 
}
```
3. If you get the error `Firebase: Error(“auth/invalid”)` key error after ___cloning any firebase project___, what should you do?
   - [ ] cloning the project again
   - [ ] repeat the command npm i
   - [x] ___create a `.env.local` file and add configs___
   - [ ] I will sleep if i get this
4. How will you ___use cors___ in your ___express application___?
   - `app.use(cors())`
5. What will you ___write to add___ the `.env` file to your ___express application___? (if needed google it)
   - `require('dotenv').config();`
6. What will you ___write in the query___ to get a ___specific service using id___? 
   - `_id: ObjectId(id)`
``` JavaScript
const ObjectId = require('mongodb').ObjectId;
    
app.get('/services/:id', async (req, res) => {
    const id = req.params.id;
    const query = { ___?___};
})
```
7. What is ___wrong___ with the ___following code___?
   - `headers spelling mistake`
``` JavaScript
fetch( url , {
    method: 'PUT',
    header: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(user)
})
```
8. What is ___HTTPS___ (google it)
   - `A system to encrypt data transfer to database`
9.  Which ___method___ will you use in your ___express application___ to ___get json data___ from the client side?
    - `app.use(express.json())`
10. What will you use to get ___all the services___?
    - `find({})`
``` JavaScript
app.get('/services', async (req, res) => {
    const cursor = servicesCollection.__?____;
}
```

**[🔼Back to Top](#table-of-contents)**

<br /> <br />

# Module 68: (Advanced) Secure API using JWT

## 68.0 Text Instruction

### `What I know from this Milestone`

1. How to create a ___node project___.
2. How to ___create a API___ like ___simple API___, ___dynamic API___ etc. How to ___create API for GET, POST, Update, Delete___ methods and how to ___call___ these types of ___API from client-side___.
3. How to ___add data___ form ___client-side to MongoDB Database___. How to ___load data___ form MongoDB Databse and also ___Edit___ and ___Update___ those data and how to ___Delete___ data form database.
4. [Pagination and Load Data by filter](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone08/module48-simple-react-SPA-with-simple-E-commerce/02ema-john-simple.md#module-67-pagination-and-load-data-by-filter "M8M67: Pagination and Load Data by filter (ema-john-simple")

**[🔼Back to Top](#table-of-contents)**

### `What I will know`

5. How to ___host database's API___ and how to ___load data___ in UI from ___hosting database___ using ___node___.
6. Bigest learning: how to ___manage error handling___. 

**[🔼Back to Top](#table-of-contents)**

### `Learning from this Module`

- How to ___set default value in form___ and how to ___save___ those data in a server. How to ___display___ those data in a website.
- `JWT token`: Introduction. From where, we ___can get these token___ and after getting these token, how to ___put these token in client-side___.
- After getting these token in client-side, ___send these token___ as a ___authorization header___ in server-side. Then ___extract these token form header___ and ___varify___ it. To do this, we need to ___install jsonwebtoken package___. After that, ___Decode___ the ___JWT token___ using ___a function of middleware___.
- How to ___send invalid JWT token holder___ to ___Login page___.

> `JWT token` ___secure___ the `server-side API`

**[🔼Back to Top](#table-of-contents)**

## 68.1 Module Introduction Project setup recap custom hook

### `App.js`

``` JavaScript
// In App.js

<Route path='/checkout/:serviceDetailId' element={
    <RequireAuth>
        <Checkout></Checkout>
    </RequireAuth>
}></Route>
```

**[🔼Back to Top](#table-of-contents)**

### `Create Custom Hook called useServiceDetail.js`

``` JavaScript
// In useServiceDetail.js

import { useEffect, useState } from "react";

const useServiceDetail = serviceDetailId => {
    const [service, setService] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/service/${serviceDetailId}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));

    }, [serviceDetailId]);

    return [service, setService];
}

export default useServiceDetail;
```

**[🔼Back to Top](#table-of-contents)**

### `ServiceDetail.js`

``` JavaScript
// In ServiceDetail.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);

    return (
        <div>
            <h2 className='text-center m-5'>You are about to book: <span className='text-primary'>{service.name}</span></h2>
            <div className='text-center mb-5'>
                <Link to={`/checkout/${serviceDetailId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
```

**[🔼Back to Top](#table-of-contents)**

### `Checkout.js`

``` JavaScript
// In Checkout.js

import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center m-5'>Please Order: {service.name}</h2>
            <form>
                <input type="text" name="name" placeholder='Name' required />
            </form>
        </div>
    );
};

export default Checkout;
```

**[🔼Back to Top](#table-of-contents)**

## 68.2 (Optional) Handle Controlled input value change in your form

### `Error` (Changing an uncontrolled input to be controlled)

> <p align="justify" style="color:red;" >▸Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.</p>

``` JavaScript
// In Checkout.js

import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);

    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-center m-5'>Please Order: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" name="name" placeholder='name' required />
                <br />
                <input className='w-100 mb-2' type="email" name="email" placeholder='email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="phone" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;
```

> `<input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required />` <br />⋙ this line of code is responsive to make this kind of error. Because, we `set the value of service` like `service.name` and it ___changes___ `an uncontrolled input to be controlled`.

**[🔼Back to Top](#table-of-contents)**

#### `Fix the Error` (Changing an uncontrolled input to be controlled)

> `Input field shows` the `state value`. So, we need to `set the state` and `modify the state value`. In this way, we can use only once type of input field called `Controlled input field`. Otherwise, we create an ___uncontrolled input field___ but change those ___uncontrolled input to be controlled___ and this ___makes an error___.

``` JavaScript
// In Checkout.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);
    const [user, setUser] = useState({
        name: 'Akbar The Great',
        email: 'akbar@momo.taj',
        address: 'Tajmohol Road Md.pur',
        phone: '01711111111'
    });

    const handleAddressChange = event => {
        console.log(event.target.value);
        const {address, ...rest} = user;
        // console.log(address, rest);
        const newAddress = event.target.value;
        const newUser = {address: newAddress, ...rest};
        console.log(newUser);
        setUser(newUser);
    }

    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-center m-5'>Please Order: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" value={user.name} name="name" placeholder='name' required />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" placeholder='email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" onChange={handleAddressChange} value={user.address} name="address" placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="phone" value={user.phone} name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;
```

**[🔼Back to Top](#table-of-contents)**

### `Create another Error` (provided a `value` prop to a form field without an `onChange` handler)

> <p align="justify" style="color:red;" >▸Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.</p>

> `Solution:` <br /> Set `onChange` ___handler___ like `address input-field` for other input-field such as ___name___, ___email___, ___service___, ___phone___.

**[🔼Back to Top](#table-of-contents)**

## 68.3 Get Order data, create API endpoint and readonly input

### `Install Axios` (in client-side)

- [Axios](https://axios-http.com/docs/intro "Getting Started") - [POST Requests](https://axios-http.com/docs/post_example "How to perform POST requests with Axios")
- If we use `Axios`, we don't need to write ___headers___, ___JSON.stringify___ and don't need to ___convert response___ to ___JSON___ like `res.json()` etc.

``` Terminal
npm install axios
```

**[🔼Back to Top](#table-of-contents)**

### `Create Order Collection API` (index.js)

``` JavaScript
// In index.js

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');
        const orderCollection = client.db('geniusCar').collection('order'); // MongoDB automatic create it, if doesn't exists.

        // Order collection API
        app.post('/order', async(req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.send(result);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `Modified Form` (Checkout.js)

``` JavaScript
// In Checkout.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);
    const [user] = useAuthState(auth);

    // if (user) {
    //     console.log(user);
    // }

    // const [user, setUser] = useState({
    //     name: 'Akbar The Great',
    //     email: 'akbar@momo.taj',
    //     address: 'Tajmohol Road Md.pur',
    //     phone: '01711111111'
    // });

    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const {address, ...rest} = user;
    //     // console.log(address, rest);
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceDetailId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
    }

    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-center m-5'>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" /* onChange={handleAddressChange} value={user.address} */ name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="phone" value={user.phone} name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;
```

**[🔼Back to Top](#table-of-contents)**

## 68.4 Save order for multiple users and set one account per user

### `Modified Checkout.js`

``` JavaScript
// In Checkout.js

import React from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';
import axios from 'axios';

const Checkout = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);
    const [user] = useAuthState(auth);

    // if (user) {
    //     console.log(user);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceDetailId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response => {
            // console.log(response);
            const {data} = response;
            if (data.insertedId) {
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-center m-5'>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="phone" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;
```

**[🔼Back to Top](#table-of-contents)**

### `Create Order.js component`

``` JavaScript
// In Order.js

import React from 'react';

const Order = () => {
    return (
        <div>
            <h2>Your Orders</h2>
        </div>
    );
};

export default Order;
```

**[🔼Back to Top](#table-of-contents)**

### `Modified App.js` (Toast added globally & orders route added)

``` JavaScript
// In App.js

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/service/:serviceDetailId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
```

**[🔼Back to Top](#table-of-contents)**

### `Orders Route added in Header component` (if user logged in)

``` JavaScript
// In Header.js

{
    user && 
    <>
        <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
    </>
}
```

**[🔼Back to Top](#table-of-contents)**

## 68.5 Filter orders info by email address and introduction JWT token

### `Get Order collection API` (get all orders json data for single user according to email address) - (server-side)

``` JavaScript
// In index.js

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');
        const orderCollection = client.db('geniusCar').collection('order'); // MongoDB automatic create it, if doesn't exists.

        // Get Order collection API | get all orders json data for single user according to email address
        app.get('/order', async(req, res) => {
            const email = req.query.email;
            // console.log(email);
            const query = {email: email};
            const cursor = orderCollection.find(query); // Filter orders info by email address
            const orders = await cursor.toArray();
            res.send(orders);
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `Get Order collection API` (get all orders json data for single user according to email address) - (client-side)

``` JavaScript
// In Order.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        const getOrders = async() => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            // const response = await axios.get(url);
            // const {data} = response;
            const {data} = await axios.get(url);
            setOrders(data);
        }
        getOrders();
    }, [user]);
    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
        </div>
    );
};

export default Order;
```

**[🔼Back to Top](#table-of-contents)**

### `JSON Web Tokens` (JWT = jsonwebtoken) - (Introduction)

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken "An implementation of JSON Web Tokens - npmjs.com") - [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken "github.com") - [JWT.IO](https://jwt.io/introduction "JWT.IO allows you to decode, verify and generate JWT - jwt.io | Introduction")
- `http://localhost:5000/order?email=crescentpartha406@gmail.com` 
  - It is a `GET API`, so we can ___access it from browser___.
  - We also can get `POST API` through the `Postman` & `RESTClient`.
    - [Postman](https://www.postman.com/) is an API platform for developers to ___design, build, test and iterate___ their ___APIs___. 
    - [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en "Chrome Extension") is an ___application___ that allows us to ___mock up frontend requests___ without writing any JavaScript. With Postman, we can practice ___sending requests___ to our ___JSON Server___.
    - [RESTClient](http://restclient.net/) - A debugger for RESTful web services.
    - [REST Client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo "Advanced REST client - Chrome Extension") - The only REST client that ___makes connection___ directly on ___socket___ giving you ___full control over the connection___ and ___request/response headers___.
  - This API is ___Open___. So, it ___isn't secure___. Anyone can ___access data___ using `query search` like `?email=crescentpartha406@gmail.com`
  - Suppose, you have ___many server___, it could be ___microservice___ or ___normal service___. You want ___not to Logout___ when go to ___one server to another server___. That time you ___give a special token___. If you give a ___valid token___, then give ___access___, otherwise ___not___. We can secure our API in this way or other way. But popular is `JSON Web Token`.
  - So, there is a ___JWT token___, we neet to ___issue___(create) it and it will be in ___client-side___. We need to ___send it in client-side___ and ___verify___. 
    - If token ___not found___ then we ___don't know the user___ and ___don't give the access or data___. 
    - If token in ___found___ then we need to ___check___ it. 

**[🔼Back to Top](#table-of-contents)**

### `Install JWT`

``` JavaScript 
npm install jsonwebtoken

/* OR */

npm i jsonwebtoken
```

**[🔼Back to Top](#table-of-contents)**

## 68.6 (Advanced) Create JWT Token, Get jwt token on client-side

### `JWT Introduction`

- __Issue two token__
  - `Access token`
    - Access token ___used for permission___. and has a ___limited time period___.
    - If ___Access token expire___ and ___Refresh token is valid___, then ___give a new pass___.
    - If Refresh token is ___invalid___ then ___Logout___.
  - `Refresh token` 
    - ___Original Pass___ - ___Long time period___ like (1 or 2 months - 1 or 2 years)
    - If Refresh token is ___expire___ then ___Logout___ and ___need to Login___ again.
- ___Access_Token___ has ___three parts___ like (`Header.PayLoad.Signature`)

> `In Large Application`, create your ___SERVICES API___ or ___PRODUCT API___ in ___another file or route___. Then you will know, how to use Route in Express. You can use ___File-Structure___ or ___Folder-Structure___ to manage or organize the ___APIs___.

**[🔼Back to Top](#table-of-contents)**

### `Issue JWT token` (generate/create jwt token)

- [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken "An implementation of JSON Web Tokens - github.com")

``` JavaScript
// In index.js | Generate or Issue JWT Token

const jwt = require('jsonwebtoken');

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');
        const orderCollection = client.db('geniusCar').collection('order'); // MongoDB automatic create it, if doesn't exists.

        // AUTH | After login, we issue a token
        app.post('/login', async(req, res) => {
            const user = req.body;
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1d' // 1 day expire date
            });
            res.send({accessToken});
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `Create Hash Secret Key`

- Open ___new terminal___ > go to ___inside___ your ___server-side project___ > write `node` > ___Enter___
- write `require('crypto').randomBytes(64).toString('hex')` > ___Enter___ > it will generate ___64 bytes hash secret key___ > ___Copy___ & ___set___ in `.env`

``` JavaScript
// In Terminal | After going inside the server-side project

node
require('crypto').randomBytes(64).toString('hex')
``` 

``` JavaScript
// In .env

ACCESS_TOKEN_SECRET=36b843f7f482bfdb3a50d37112e11de90b97afc23acb72608f0e74c07048c7d0046f60fa86402838f89c9789e56fc0f46a95155351f04f249efd404603664d35
```

> `Notes:` ___ACCESS_TOKEN___ we can paste in [JWT Debugger](https://jwt.io/ "JWT Debugger - jwt.io") to be `Encoded`. In `Decoded` section, It will shows us about ___Header___, ___Playload___, ___Verify Signature___ etc.

**[🔼Back to Top](#table-of-contents)**

### `Implement: navigate after getting the token` (if Logged in)

``` JavaScript
// In Login.js | navigate after getting the token, if user is logged in | After login, we issue a token

import axios from 'axios';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if (user) {
        // navigate(from, { replace: true }); // we navigate after getting the token
    }

    // After login, we issue a token
    const handleUserSignIn = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/login', {email});
        // console.log(data);
        localStorage.setItem('accessToken', data.accessToken); // localStorage isn't the best place to set accessToken, we can set it in the cookies for extra-security.
        navigate(from, { replace: true }); // we navigate after getting the token
    }

    return (
        <div className='form-container'>
            <PageTitle title="Login"></PageTitle>
            <div>
                <form onSubmit={handleUserSignIn}>
                </form>
            </div>
        </div>
    );
};

export default Login;
```

**[🔼Back to Top](#table-of-contents)**

### `Full Code Example`

- [index.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/02genius-car-services-server/index.js "index.js - 02genius-car-services-server") - [Login.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/01genius-car-services/src/Pages/Login/Login.js "Login.js - 01genius-car-services (client-side)")

**[🔼Back to Top](#table-of-contents)**

## 68.7 (Advanced) Send jwt token in the server, verify and decode jwt token

### `Verify JWT Token`

#### `How to get the token`
``` JavaScript
// In Console

const text = 'Bearer myToken';
text.split(' '); // ▸(2) ['Bearer', 'myToken']
text.split(' ')[1]; // 'myToken'

/* -------------------------------- */

const token = authHeader.split(' ')[1];
```

**[🔼Back to Top](#table-of-contents)**

#### `Verify JWT Token` (in server-side)

``` JavaScript
// In index.js

const jwt = require('jsonwebtoken');

// Verify JWT Token
function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization; // get headers
    if (!authHeader) {
        return res.status(401).send({ message: 'unauthorized access' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: 'Forbidden access' });
        }
        console.log('decoded', decoded);
        req.decoded = decoded;
        next();
    })
    // console.log('Inside verifyJWT', authHeader);
}

// Create dynamic data and send to the database
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('geniusCar').collection('service');
        const orderCollection = client.db('geniusCar').collection('order'); // MongoDB automatic create it, if doesn't exists.

        // AUTH | After login, we issue a token
        app.post('/login', async (req, res) => {
            const user = req.body;
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1d' // 1 day expire date
            });
            res.send({ accessToken });
        });

        // Get Order collection API | get all orders json data for single user according to email address
        app.get('/order', verifyJWT, async (req, res) => { // we create a middleware by setting verifyJWT
            const decodedEmail = req.decoded.email;
            const email = req.query.email;
            // console.log(email);
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = orderCollection.find(query); // Filter orders info by email address
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({message: 'forbidden access'});
            }
        });
    }
    finally {
        // await client.close(); // commented, if I want to keep connection active;
    }
}
run().catch(console.dir);
```

**[🔼Back to Top](#table-of-contents)**

### `Set Headers` (in Order.js)

``` JavaScript
// In Order.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        const getOrders = async() => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            // const response = await axios.get(url);
            // const {data} = response;
            const {data} = await axios.get(url, {
                // set headers
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setOrders(data);
        }
        getOrders();
    }, [user]);
    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
        </div>
    );
};

export default Order;
```

**[🔼Back to Top](#table-of-contents)**

### `Full Code Example`

- [index.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/02genius-car-services-server/index.js "index.js - 02genius-car-services-server")

**[🔼Back to Top](#table-of-contents)**

## 68.8 (Advanced) Handle 401, 403 to log out user and interceptors

### `HTTP Status Codes`

- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status "HTTP response status codes - mdn web docs")
- [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes "en.wikipedia.org")

``` JavaScript
// STATUS_CODES

100 Continue
101 Switching Protocols
103 Early Hints
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
300 Multiple Choices
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
307 Temporary Redirect
308 Permanent Redirect
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Payload Too Large
414 URI Too Long
415 Unsupported Media Type
416 Range Not Satisfiable
417 Expectation Failed
418 I'm a teapot
422 Unprocessable Entity
425 Too Early
426 Upgrade Required
428 Precondition Required
429 Too Many Requests
431 Request Header Fields Too Large
451 Unavailable For Legal Reasons
500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
506 Variant Also Negotiates
507 Insufficient Storage
508 Loop Detected
510 Not Extended
511 Network Authentication Required
```

**[🔼Back to Top](#table-of-contents)**

### `Create axiosPrivate.js API`

- [Interceptors](https://axios-http.com/docs/interceptors "Interceptors - axios-http.com")
  - ___Axios interceptors___ are ___functions___ that Axios calls for every request. You can use interceptors to ___transform the request before Axios sends it___, or transform the response ___before Axios returns the response___ to your code. You can think of interceptors as Axios' equivalent to ___middleware___ in Express or Mongoose.
  - How many request send to the backend by using axios, axios ___gives a property for all in together___.

``` JavaScript
// In axiosPrivate.js

import axios from "axios";

const axiosPrivate = axios.create({});

// Add a request interceptor
axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403) {
        // refresh token
        // send to the server

    }
    return Promise.reject(error);
});

export default axiosPrivate;
```

**[🔼Back to Top](#table-of-contents)**

### `Handle the Status Codes`

``` JavaScript
// In Order.js

// import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            // const response = await axios.get(url);
            // const {data} = response;

            // Handle the Status Codes
            try {
                // const { data } = await axios.get(url, {
                //     // set headers
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
                //     }
                // });

                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                // console.log(error);
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth); // if token is expire or invalid, then logout.
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [user, navigate]);
    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
        </div>
    );
};

export default Order;
```

**[🔼Back to Top](#table-of-contents)**

## 68.9 (Conceptual) What is JWT and how does it work

### `Introduction`

> `JWT` = `JSON WEB Token` = JWT is pronounced as "`jot`" <br /> JWT = ___securely transmits information between two parties___ 

**[🔼Back to Top](#table-of-contents)**

### `Why do we use JWT?` 

- ___Without JWT___ you can ___access the protected route___. 
- On the other hand, ___With JWT___ you ___can't access the protected route___.
- JWT is mainly used for ___authorization purpose___, not authentication.
- `Authentication` ⋙ ___Who are you?___ | ___Login and Password___
- `Authorization` ⋙ ___What you can do?___ | ___Add photo, Delete photo, View photo___

**[🔼Back to Top](#table-of-contents)**

### `How JWT Works?`

1. Client ___login___ with username and password
2. Server ___creates___ a token for the client
3. Server ___sends___ a token to the client
4. Client ___stores___ the token on either ___Local Storage___ or ___Browser Cookie___
5. Next time the client ___makes a request___, a copy of the token is ___send to the server___ for authorization (by using ___Bearer___)
6. Server ___verifies___ the ___JWT signature___ before giving the authorization
7. Server ___responds___ to the ___client's request___

**[🔼Back to Top](#table-of-contents)**

### `What JWT looks like?`

- JWT Token has ___three parts___ like (`Header.PayLoad.Signature`)
- ___Structure___ of JSON Web Token (JWT) ⋙ ___HEADER, PAYLOAD, SIGNATURE___
- By using JSON Web Token, people ___secure the server___, ___API___, ___interact with microservice___ etc.
- JSON Web Token
  1. ___INDUSTRY STANDARD RFC 7519___
  2. ___Securely transmits information___ between parties as a ___JSON object___
  3. ___Digitally Signed___

**[🔼Back to Top](#table-of-contents)**

## Quiz 68

1. What is ___controlled input___ in react?
   - `An input element whose value is being controlled by a component's state`
2. What is ___Axios___?
   - `Axios is a promise-based HTTP client for node.js and the browser`
3. Which one is ___true about Axios___?
   - [ ] Make XMLHttpRequests from the browser
   - [ ] Make HTTP requests from node.js
   - [ ] Automatic transforms for JSON data
   - [ ] Client-side support for protecting against XSRF
   - [x] ___All of above___
4. What is ___wrong___ with the ___code snippet below___?
   - `You do not need to pass the "method"`
``` JavaScript
axios.post('/user',{
  Method : "POST" }
 {
  firstName: 'Fred',
  lastName: 'Flintstone'
 })
 .then(function (response) {
  console.log(response);
 })
 .catch(function (error) {
  console.log(error);
 });
```
5. You can use ___multiple collections___ inside of a database in MongoDB.
   - `True`
6. What is ___JWT___?
   - `JWT is a compact and self-contained way for securely transmitting information between parties`
7. What is ___crypto___ in ___node.js___?
   - [x] ___Crypto is a node module___
   - [ ] Crypto is a digital asset
   - [ ] Crypto is a password 
   - [ ] All of the above
8. How would you ___convert random bytes to Hexadecimal___ in node.js?
   - `.toString('hex')`
9.  How to ___generate a token using JWT___?
    - `const token = jwt.sign({ email: 'user@gmail.com'}, 'secret');`
10. What does ___401 status code___ mean?
    - `Unauthorized`

**[🔼Back to Top](#table-of-contents)**

<br /> <br />

# Module 69: Deploy to Heroku and Practice Problem

## `Documentation Links for Module 69`

- [Module 69: Deploy to Heroku and Practice Problem](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone11/module69-deploy-to-heroku-and-practice-problem/00deploy-to-heroku.md "Module 69: Documentation")
- [02genius-car-services-server/Steps.md](https://github.com/crescentpartha/02genius-car-services-server/blob/main/Steps.md "Only 69.1M Documentation for Module 69")
- [02genius-car-services-server](https://github.com/crescentpartha/02genius-car-services-server "02genius-car-services-server Repository Link | Deploy in Heroku")

**[🔼Back to Top](#table-of-contents)**
