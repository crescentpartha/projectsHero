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
- Send verification email when user `Sign-In`, `Login`, and Click the `Send Verification Email Again` Button.

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



