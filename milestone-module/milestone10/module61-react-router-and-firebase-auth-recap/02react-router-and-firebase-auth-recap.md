# Module 61: React Router and Firebase Auth Recap

## 61.0 Basic Project Setup

⫸ `Basic Project Setup:`
- ___Create React App___
- Create a ___Firebase project___ and ___Register___ my app
- Install the ___SDK___ and ___initialize Firebase___
  - Install Firebase & Firebase Setup
- Install ___React Router___ & React Router ___Setup___
- Create basic ___Components___ such as Home, Header, Login, NotFound
- ____redirects___ file added
- Create ___markdown___ file for documentation
- Install ___React-Bootstrap___ and Add ___Bootstrap CDN Link___ in ___index.html___
- ___CSS style___ added
- Setup ___JSON data___ and ___images___

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


## 61.1 Module Overview - Responsive Header Component - sticky top

⫸ ___Navbar > [Responsive Behaviors](https://react-bootstrap.netlify.app/components/navbar/#responsive-behaviors): from React-Bootstrap___
- Create ___multiple route component___
- Create ___Header___ component and ___setup routes___

``` JavaScript
// Header.js 

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/trivago-logo.png';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={35} width={120} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/stays">Stays</Nav.Link>
                            <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
```

---

⫸ `Install FontAwesomeIcons:`

``` Terminal
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
npm install --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
```

⫸ `Footer Section:`

``` JavaScript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

<div className='d-flex justify-content-center m-5'>
    <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
        <p className='text-light text-uppercase m-0'>Download:</p>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
            <img className='m-2' src={google} alt="Google Download" />
            <img className='m-2' src={store} alt="App Store Download" />
        </div>
    </div>
    <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
        <p className='text-light text-uppercase m-0'>Follow Us:</p>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
            <FontAwesomeIcon className='m-1 fs-4' icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon className='m-1 fs-4' icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon className='m-1 fs-4' icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon className='m-1 fs-4' icon={faYoutube}></FontAwesomeIcon>
            <FontAwesomeIcon className='m-1 fs-4' icon={faLinkedin}></FontAwesomeIcon>
        </div>
    </div>
</div>
```




