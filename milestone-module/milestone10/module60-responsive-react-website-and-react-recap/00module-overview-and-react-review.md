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

## 60.6 Build Responsive React website using Bootstrap

### `Using Bootstrap:`
- ___Bootstrap CDN link___
- ___Grid___
- ___Card___
- ___Gutters___

## 60.7 React Bootstrap for responsive and image slider, banner

### `Using React-Bootstrap:`
- ___Install React-Bootstrap___
- ___Carousels___
- [React Carousel libraries](https://react.libhunt.com/libs/carousel) | [14 Top React Carousel Components](https://alvarotrigo.com/blog/react-carousels/) | [10 Best React Carousel Libraries](https://openbase.com/categories/js/best-react-carousel-libraries)


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

<br />

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

<br />

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

<br />

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

<br />

# Module 66: Genius Car Node Mongo CRUD Recap

## 61.1 (Conceptual) Node, Mongo, React, Client, Server, Rest, CRUD

### `Technology Selection`

- ___Resources:___ [Client/Server Model Image](https://www.researchgate.net/profile/Agisilaos-Konidaris/publication/314474221/figure/fig1/AS:633794000347137@1528119673567/The-client-server-model-of-our-approach.png "Client/Server Model Image - researchgate.net") | [Three-Tier Architecture Image](data:image/png;base64,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 "Client Server Architecture - Client Server Model")
- `Client-side:` HTML, CSS, JavaScript, `React`, Library and Framework etc
- `Server-side:` Python, PHT, `Node.js`, .Net etc
- `Database:` MySQL, PostgreSQL, `MongoDB`, MariaDB, Oracle, Firebase, AWS Hosting etc
  - ___SQL database vs NoSQL database___

> `Notes:` Every technology has some `pros and cons`. Every technology `serves different solutions`. So It is not mandatory that If we use `React` in client-side, then must use `Node.js` as a server-side and `MongoDB` as a database. What types of technology I used in my project that actually depends on `Project's size, volume, complexity, need and user interaction`.<br /><br /> In here, We use ___Node.js___ for `CRUD operations` and `REST API`.<br /> ___([CRUD](https://www.abaponhana.com/wp-content/uploads/2018/11/CRUD-operations.jpg "CRUD Operation - Image") = Create, Read, Update and Delete)___ <br /> ___(REST = Representational State Transfer)___ <br /> ___(REST API = RESTful API)___ <br /> ___(API = Application Programming Interface or web API)___ <br /><br /> ___Resources:___ [What is a REST API](https://www.redhat.com/en/topics/api/what-is-a-rest-api "What is a REST API - redhat.com") | [How Web Hosting works](data:image/jpeg;base64,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 "How Web Hosting Works? - Image") | [Express.js](https://expressjs.com/ "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.")






