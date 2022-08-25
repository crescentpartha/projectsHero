# Module 60: Responsive React Website and React Recap

## 60.1 Module Overview and simple review of React

⫸ `React Core Concepts:`
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


⫸ `React-Router Website:`
1. Project ___set up___ and ___install___ React Router
2. ___Wrap___ your ___app___ by ___BrowserRouter___ form ___react-router-dom___
3. Set up ___routes___
4. ___Link - Active Link - useNavigate() - route parameter___
5. ___Authentication___ 


⫸ `Firebase:`
1. ___Firebase Authentication___
2. ___Login System___ (google, github, facebook, twitter, Email/Password)


⫸ `Responsive React Website:`
1. Make a Responsive React Website by using ___Media Query___
2. Make a Responsive React Website by using ___Plain Bootstrap___
3. Make a Responsive React Website by using ___React Bootstrap___


⫸ `Conceptual Session:`
1. Integrate the ___Authentication System___ (steps)
2. Watch again until the concepts is clear
3. Try to catch the (main) ___concepts of particular topics___ by hardWork.


⫸ `Conclusion:`
1. ___React___ Concepts
2. ___React-Router___ Concepts
3. ___Responsive___ React Website
4. ___Firebase___ Concepts

## 60.2 Create Project Component setup and router setup

⫸ `Basic Project Setup:`
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

⫸ `If Clone any React Project:` (___Need to follow some steps___)
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

⫸ `Authentication Steps or Auth_steps:`
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

⫸ `Firebase Hosting/Deploy Steps:` (for ___1st time___) <br /> (___Hosting > Get Started___)
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

⫸ `Firebase Hosting/Deploy Steps:` (for ___2nd/multiple times___)
1. `npm run build`
2. `firebase deploy`


## 60.3 Collect, Edit, Optimize and host images for your website

⫸ `Image Resources:`
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
> `Note:` we ___can't covert___ direct image to a ___JSON format___ because image information will be remove. That's why we should use ___image link___. <br /> [ImgBB](https://imgbb.com/ "ImgBB - free image hosting | Upload and share your images") is a ___free image hosting___ website. We can ___upload and share___ own images with other or use to make ___custom data purposes___.


## 60.4 Load fake data map services to display single services

⫸ `Load & display Data:`
- [services.json](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/01genius-car-services/public/services.json "Fake Data of services") - [Services.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/01genius-car-services/src/Pages/Home/Services/Services.js "Services Component") - [Service.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/01genius-car-services/src/Pages/Home/Service/Service.js "Service Component")


## 60.5 Make Services Responsive using CSS media query

⫸ `CSS Media Query:` (___Vanilla CSS___) (___sample___)

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

⫸ `Make services Responsive:` (___according to Bootstrap___)

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

⫸ `Examples:`

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

⫸ `Using Bootstrap:`
- ___Bootstrap CDN link___
- ___Grid___
- ___Card___
- ___Gutters___

## 60.7 React Bootstrap for responsive and image slider, banner

⫸ `Using React-Bootstrap:`
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

⫸ `Header using React-Bootstrap & React-Router:`

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

# Module 60.5: Firebase auth and private Route Recap

## 60.5.1 Firebase auth and private Route Recap

⫸ `Google Authentication with react-firebase-hooks:`

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

⫸ `Steps to use firebase & (Twitter Authentication):` (___Recommended to Follow these 09 Steps___) (___Twitter Sign-in Provider___)

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


