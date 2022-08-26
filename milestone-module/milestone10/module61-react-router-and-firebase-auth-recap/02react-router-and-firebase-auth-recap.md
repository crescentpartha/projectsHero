## Table of Contents

- [Module 61: React Router and Firebase Auth Recap](#module-61-react-router-and-firebase-auth-recap)
  - [61.0 Basic Project Setup](#610-basic-project-setup)
    - [Basic Project Setup:](#basic-project-setup)
    - [If Clone any React Project: (Need to follow some ___steps___)](#if-clone-any-react-project-need-to-follow-some-steps)
    - [Authentication Steps or Auth_steps:](#authentication-steps-or-auth_steps)
    - [Firebase Hosting/Deploy Steps: (for ___1st time___)](#firebase-hostingdeploy-steps-for-1st-time)
    - [Firebase Hosting/Deploy Steps: (for ___2nd/multiple times___)](#firebase-hostingdeploy-steps-for-2ndmultiple-times)
  - [61.1 Module Overview - Responsive Header Component - sticky top](#611-module-overview---responsive-header-component---sticky-top)
    - [Navbar > Responsive Behaviors: from React-Bootstrap](#navbar--responsive-behaviors-from-react-bootstrap)
    - [Install FontAwesomeIcons: (___free-brands-svg-icons___)](#install-fontawesomeicons-free-brands-svg-icons)
    - [Footer Component's Section: (___FontAwesomeIcons & ImageIcons & Dynamic Date___ added in the Footer.js component)](#footer-components-section-fontawesomeicons--imageicons--dynamic-date-added-in-the-footerjs-component)
    - [Create Custom Hooks: (Custom ___useCountries___ hooks)](#create-custom-hooks-custom-usecountries-hooks)
    - [Use Custom Hooks: (___Countries___ Component)](#use-custom-hooks-countries-component)
    - [Use Custom Hooks: (___Country___ Component)](#use-custom-hooks-country-component)
    - [Banners Component: (3 images ___Carousel___ added)](#banners-component-3-images-carousel-added)
    - [Single-Bed & Double-Bed Products Display in the Stays components:](#single-bed--double-bed-products-display-in-the-stays-components)
    - [Cars Products Display in the Cars components:](#cars-products-display-in-the-cars-components)
    - [Implement Accordion from React-Bootstrap: (About.js)](#implement-accordion-from-react-bootstrap-aboutjs)
  - [61.2 Setup Dynamic Route and Access route params](#612-setup-dynamic-route-and-access-route-params)
    - [Reading URL Params (Steps): (___Setup:___ `route` - `parameter-&-click` - `getId`)](#reading-url-params-steps-setup-route---parameter--click---getid)
      - [01. Set Nested Route: (___route___)](#01-set-nested-route-route)
      - [02. Set navigate: (___parameter-&-click___)](#02-set-navigate-parameter--click)
      - [03. Get invoiceId: (___getId___)](#03-get-invoiceid-getid)
  - [61.3 Navigate to services, 404 page, Login Component](#613-navigate-to-services-404-page-login-component)
    - [Navigate according to id in a single page:](#navigate-according-to-id-in-a-single-page)
    - [NotFound component Modified:](#notfound-component-modified)
  - [61.4 Style Login form using React-Bootstrap and use useRef hook to access input value](#614-style-login-form-using-react-bootstrap-and-use-useref-hook-to-access-input-value)
    - [useRef Hook:](#useref-hook)
    - [Style Login form using Bootstrap:](#style-login-form-using-bootstrap)
  - [61.5 Create Register form and style it using Vanilla CSS](#615-create-register-form-and-style-it-using-vanilla-css)
  - [61.6 (optional) Environment variable for Firebase in Create React App | Get form data in 3 different ways](#616-optional-environment-variable-for-firebase-in-create-react-app--get-form-data-in-3-different-ways)
    - [Get Form data in 3 different ways:](#get-form-data-in-3-different-ways)
      - [State declare & onBlur EventHandler - Login.js](#state-declare--onblur-eventhandler---loginjs)
      - [useRef hook - Login.js](#useref-hook---loginjs)
      - [event.target.email.value - SignUp.js](#eventtargetemailvalue---signupjs)
    - [Adding Custom Environment Variables: (___Set Environment Variables___ for Firebase Config)](#adding-custom-environment-variables-set-environment-variables-for-firebase-config)
    - [Firebase Configuration without Environment Variables setup:](#firebase-configuration-without-environment-variables-setup)
    - [Set Environment Variables for Firebase Configuration in Create React App:](#set-environment-variables-for-firebase-configuration-in-create-react-app)
    - [After Setup Environment Variable:](#after-setup-environment-variable)
    - [Some Error are showing below:](#some-error-are-showing-below)
    - [KeyBoard Shortcut:](#keyboard-shortcut)
  - [61.7 Email password based authentication with react firebase hooks](#617-email-password-based-authentication-with-react-firebase-hooks)
    - [Get Initialize Firebase Configuration Code:](#get-initialize-firebase-configuration-code)
    - [Install react-firebase-hooks](#install-react-firebase-hooks)
    - [useCreateUserWithEmailAndPassword from react-firebase-hooks: (SignUp.js)](#usecreateuserwithemailandpassword-from-react-firebase-hooks-signupjs)
    - [useSignInWithEmailAndPassword from react-firebase-hooks: (Login.js)](#usesigninwithemailandpassword-from-react-firebase-hooks-loginjs)
    - [signOut from react-firebase-hooks: (Header.js)](#signout-from-react-firebase-hooks-headerjs)
  - [61.8 Introduction to Protected Route and Require Auth](#618-introduction-to-protected-route-and-require-auth)
    - [Create RequireAuth component: `Step-01`](#create-requireauth-component-step-01)
    - [Wrap the component with RequireAuth component: `Step-02`](#wrap-the-component-with-requireauth-component-step-02)
    - [Implement Authentication Redirect: `Step-03`](#implement-authentication-redirect-step-03)
  - [61.9 Create Checkout component and make it Protected Route](#619-create-checkout-component-and-make-it-protected-route)
    - [Create a Button in CarDetail, SingleBedDetail, and DoubleBedDetail components:](#create-a-button-in-cardetail-singlebeddetail-and-doublebeddetail-components)
  - [61.10 Quiz](#6110-quiz)
    - [Firebase & Netlify Deploy](#firebase--netlify-deploy)
- [Module 62: Build a Authentication System for 60genius-car-services & 61trivago-booking](#module-62-build-a-authentication-system-for-60genius-car-services--61trivago-booking)
  - [62.1 Module Overview and Social Login initial setup](#621-module-overview-and-social-login-initial-setup)
  - [62.2 Style social login and share social login component](#622-style-social-login-and-share-social-login-component)
  - [62.3 Implement Google Login System from react-firebase-hooks](#623-implement-google-login-system-from-react-firebase-hooks)
  - [62.4 Implement Github Login System and Allow multiple account](#624-implement-github-login-system-and-allow-multiple-account)


# Module 61: React Router and Firebase Auth Recap

## 61.0 Basic Project Setup

### Basic Project Setup:
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

### If Clone any React Project: (Need to follow some ___steps___)
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

### Authentication Steps or Auth_steps:
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

### Firebase Hosting/Deploy Steps: (for ___1st time___) 

(___Hosting > Get Started___)

1. ___Install Firebase CLI___ 
   - `npm install -g firebase-tools` (___one time___ for your ___computer___)
2. ___Initialize your Project___
   - `firebase login` (___one time___ for your ___computer___)
     - `Y` > Select Google Account > `Allow` > ___Firebase CLI___ Login Successful
   - `firebase init` (___one time___ for ___each project___) (___Some questions need to face___)
     - Are you ready to proceed? (Y/n) <br /> > `Y`
     - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys <br /> > (Use `↓ or ↑ arrow key` to go up or down) > (press `SpaceBar` to select or unselect) > (press `Enter`)
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

⫸ `Note:` It could be needed in the deployment process time.

---

### Firebase Hosting/Deploy Steps: (for ___2nd/multiple times___)
1. `npm run build`
2. `firebase deploy`


## 61.1 Module Overview - Responsive Header Component - sticky top

### Navbar > [Responsive Behaviors](https://react-bootstrap.netlify.app/components/navbar/#responsive-behaviors): from React-Bootstrap
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

### Install FontAwesomeIcons: (___free-brands-svg-icons___)
- ___Four steps to install___

``` Terminal
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
npm install --save @fortawesome/free-brands-svg-icons
```

- ___One step to install___ (`Alternative Solution`)

``` Terminal
npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
```

### Footer Component's Section: (___FontAwesomeIcons & ImageIcons & Dynamic Date___ added in the [Footer.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/Shared/Footer/Footer.js "Footer component - 01trivago-booking App") component)

``` JavaScript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

<div className='d-flex flex-wrap justify-content-center m-5'>
    <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
        <p className='text-light text-uppercase m-0'>Download:</p>
        <div className='d-flex align-items-center justify-content-center'>
            <img className='m-2' src={google} alt="Google Download" />
            <img className='m-2' src={store} alt="App Store Download" />
        </div>
    </div>
    <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
        <p className='text-light text-uppercase m-0'>Follow Us:</p>
        <div className='d-flex align-items-center justify-content-center'>
            <FontAwesomeIcon className='m-1 fs-4' icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon className='m-1 fs-4' icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon className='m-1 fs-4' icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon className='m-1 fs-4' icon={faYoutube}></FontAwesomeIcon>
            <FontAwesomeIcon className='m-1 fs-4' icon={faLinkedin}></FontAwesomeIcon>
        </div>
    </div>
</div>
<div className='text-light'>
    <hr />
    <h2>trivago</h2>
    <p>Copyright &copy;{new Date().getFullYear()} | All rights reserved by <span className='text-warning'>trivago</span></p>
</div>
```

---

### Create Custom Hooks: (Custom ___useCountries___ hooks)

``` JavaScript
// hooks/useCountries.js

import { useEffect, useState } from 'react';

const useCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        fetch('country.json')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    return [countries, setCountries];
}

export default useCountries;
```

### Use Custom Hooks: (___Countries___ Component)

``` JavaScript
// In Countries.js

import React from 'react';
import useCountries from '../../../hooks/useCountries';
import Country from '../Country/Country';

const Countries = () => {
    const [countries] = useCountries();
    return (
        <div className='mt-5'>
            <h2>Top {countries.length} popular Countries in the world!</h2>
            <div className='container mb-5 align-items-center align-self-center'>
                <div className='row m-0 g-5 align-items-center'>
                    {
                        countries.map(country => <Country
                            key={country.id}
                            country={country}
                        ></Country>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;
```

### Use Custom Hooks: (___Country___ Component)

``` JavaScript
// In Country.js

import React from 'react';

const Country = ({ country }) => {
    const { countryName, city, price, picture, about } = country;
    return (
        <div className='col align-self-center border rounded border-success p-2 mx-2 border-opacity-25'>
            <div className='d-flex'>
                <img className='rounded-start' width={300} src={picture} alt="" />
                <div className='text-start px-2 text-justify'>
                    <h2>{countryName}</h2>
                    <p>{city}</p>
                    <p>{price}</p>
                    <p>{about.length > 100 ? about.slice(0, 100) + '...' : about}</p>

                </div>
            </div>
        </div>
    );
};

export default Country;
```

---

### Banners Component: (3 images ___Carousel___ added)

``` JavaScript
// In Banners.js

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import travel from '../../../images/banner/travel-tourism-banner.jpg';
import airPlane from '../../../images/banner/airplane-banner.jpg';
import winter from '../../../images/banner/winter-banner.jpg';

const banners = [
    {
        "id": 1,
        "name": "Travel & Tourism",
        "picture": travel
    },
    {
        "id": 2,
        "name": "Air Plane",
        "picture": airPlane
    },
    {
        "id": 3,
        "name": "Winter",
        "picture": winter
    }
]

const Banners = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banners[0].picture}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{banners[0].name}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banners[1].picture}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>{banners[1].name}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banners[2].picture}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>{banners[2].name}</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banners;
```

---

### Single-Bed & Double-Bed Products Display in the Stays components:

``` JavaScript
// In Stays.js

import React from 'react';
import logo from '../../../images/trivago-logo.png';
import useSingleBed from '../../../hooks/useSingleBed';
import useDoubleBed from '../../../hooks/useDoubleBed';
import SingleBed from '../SingleBed/SingleBed';
import DoubleBed from '../DoubleBed/DoubleBed';

const Stays = () => {
    const [singleBeds] = useSingleBed();
    const [doubleBeds] = useDoubleBed();
    return (
        <div>
            <div className='d-flex flex-wrap gap-3 m-5 align-items-center justify-content-center'>
                <img width={100} height={50} src={logo} alt="trivago" />
                <div className='border-start border-2 border-secondary border-opacity-25 ps-3'>
                    <h4>Deals from your favorite booking sites</h4>
                    <p>Try searching for a city, a specific hotel, or even a landmark!</p>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='fs-3'>See what's popular Single Bed among {singleBeds.length} with other travelers!!!</h2>
                <div className='container mb-5 align-items-center align-self-center'>
                    <div className='row m-0 g-5 align-items-center'>
                        {
                            singleBeds.map(bed => <SingleBed
                                key={bed.id}
                                bed={bed}
                            ></SingleBed>)
                        }
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='fs-3'>See what's popular Double Bed among {doubleBeds.length} with other travelers!!!</h2>
                <div className='container mb-5 align-items-center align-self-center'>
                    <div className='row m-0 g-5 align-items-center'>
                        {
                            doubleBeds.map(bed => <DoubleBed
                                key={bed.id}
                                bed={bed}
                            ></DoubleBed>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stays;
```

``` JavaScript
// In SingleBed.js

import React from 'react';

const SingleBed = ({ bed }) => {
    const { name, company, distance, price, picture, email, phone, address, about } = bed;
    return (
        <div className='col align-self-center border rounded border-success p-2 mx-2 border-opacity-25'>
            <div className=''>
                <div className='bg-secondary bg-opacity-25 rounded m-1 mx-3 p-3 flex-grow-1'>
                    <img className='rounded' width={300} src={picture} alt="" />
                </div>
                <div className='text-start px-2 text-justify'>
                    <div className='d-flex align-items-center justify-content-between '>
                        <div className='bg-secondary bg-opacity-25 rounded m-1 p-3 flex-grow-1'>
                            <h2>{name}</h2>
                            <p><span>{company}</span> | <span>{price}</span></p>
                            <p><b>Distance: </b>{distance}</p>
                            <p><b>Email: </b>{email}</p>
                            <p><b>Phone: </b>{phone}</p>
                            <p><b>Address: </b>{address}</p>
                            <button type="button" className="btn btn-success">View Deal</button>
                        </div>
                    </div>
                    <div className='bg-secondary bg-opacity-25 rounded m-1 p-3 flex-grow-1'>
                        <p><b>Description: </b>{about.length > 100 ? about.slice(0, 100) + '...' : about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBed;
```

``` JavaScript
// In DoubleBed.js

import React from 'react';

const DoubleBed = ({bed}) => {
    const { name, company, distance, price, picture, email, phone, address, about } = bed;
    return (
        <div className='col align-self-center border rounded border-success p-2 mx-2 border-opacity-25'>
            <div className=''>
                <div className='bg-secondary bg-opacity-25 rounded m-1 mx-3 p-3 flex-grow-1'>
                    <img className='rounded' width={300} src={picture} alt="" />
                </div>
                <div className='text-start px-2 text-justify'>
                    <div className='d-flex align-items-center justify-content-between '>
                        <div className='bg-secondary bg-opacity-25 rounded m-1 p-3 flex-grow-1'>
                            <h2>{name}</h2>
                            <p><span>{company}</span> | <span>{price}</span></p>
                            <p><b>Distance: </b>{distance}</p>
                            <p><b>Email: </b>{email}</p>
                            <p><b>Phone: </b>{phone}</p>
                            <p><b>Address: </b>{address}</p>
                            <button type="button" className="btn btn-success">View Deal</button>
                        </div>
                    </div>
                    <div className='bg-secondary bg-opacity-25 rounded m-1 p-3 flex-grow-1'>
                        <p><b>Description: </b>{about.length > 100 ? about.slice(0, 100) + '...' : about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoubleBed;
```

---

### Cars Products Display in the Cars components:

``` JavaScript
// In Cars.js

import React from 'react';
import logo from '../../../images/trivago-logo.png';
import useCars from '../../../hooks/useCars';
import Car from '../Car/Car';

const Cars = () => {
    const [cars] = useCars();
    return (
        <div>
            <div className='d-flex flex-wrap gap-3 m-5 align-items-center justify-content-center'>
                <img width={100} height={50} src={logo} alt="trivago" />
                <div className='border-start border-2 border-secondary border-opacity-25 ps-3'>
                    <h4>Deals from your favorite booking sites</h4>
                    <p>Try searching for a city, a specific hotel, or even a landmark!</p>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='fs-3'>See what's popular Cars available among {cars.length} with other travelers!!!</h2>
                <div className='container mb-5 align-items-center align-self-center'>
                    <div className='row m-0 g-5 align-items-center'>
                        {
                            cars.map(car => <Car
                                key={car.id}
                                car={car}
                            ></Car>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;
```

``` JavaScript
// In Car.js

import React from 'react';

const Car = ({car}) => {
    const {name, company, price, picture, bags, passengers, phone} = car;
    return (
        <div className='col align-self-center border rounded border-success p-2 mx-2 border-opacity-25'>
            <div className=''>
                <div className='bg-secondary bg-opacity-25 rounded m-1 mx-3 p-3 flex-grow-1'>
                    <img className='rounded' width={300} src={picture} alt="" />
                </div>
                <div className='text-start px-2 text-justify'>
                    <div className='d-flex align-items-center justify-content-between '>
                        <div className='bg-secondary bg-opacity-25 rounded m-1 p-3 flex-grow-1'>
                            <h2>{name}</h2>
                            <p><span>{company}</span> | <span>{price}</span></p>
                            <p><span><b>Bags: </b>{bags}</span> | <span><b>Passengers: </b>{passengers}</span></p>
                            <p><b>Phone: </b>{phone}</p>
                            <button type="button" className="btn btn-success">View Deal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;
```

---

### Implement Accordion from React-Bootstrap: ([About.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/SinglePage/About/About.js "About component - 01trivago-booking App"))

``` JavaScript
// In About.js

import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <div className='d-flex flex-wrap flex-sm-wrap flex-md-wrap flex-lg-nowrap flex-xl-nowrap flex-xxl-nowrap align-items-center justify-content-center gap-5 m-5 pb-5'>
            <div className='flex-grow-1 w-100'>
                <h2 className='my-3'>How trivago Works</h2>
                <div className='w-100'>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is the difference between trivago and a booking site? </Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <p><b>trivago </b> works <span className='text-primary'>here</span>.</p>
                                    <p><b>Meanwhile, a booking site</b> including travel suppliers.</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is trivago? </Accordion.Header>
                            <Accordion.Body>
                                <div className='text-start'>
                                    <p><b>We are booking sites.</b> We compare and display different offers from many booking sites</p>
                                    <p>trivago works with approximately 190 countries.</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </div>
            </div>
            <div className='border border-secondary border-opacity-25 rounded p-3 text-start w-50'>
                <p>trivago</p>
            </div>
        </div>
    );
};

export default About;
```

## 61.2 Setup Dynamic Route and Access route params

### Reading URL Params (Steps): (___Setup:___ `route` - `parameter-&-click` - `getId`) 
1. ___Set Nested Route___ inside of the App route (___route___)
2. ___Set navigate___ in EventHandler (___parameter-&-click___)
3. ___Get invoiceId___ by useParams(); (___getId___)

> `Notes:` <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⫸ Implement `Dynamic Route` for the ___single product___ of ___Car___, ___Single-Bed___, and ___Double-Bed___

--- 

#### 01. Set Nested Route: (___route___)

``` JavaScript
// In App.js

import { Routes, Route } from 'react-router-dom';
import CarDetail from './components/DynamicRoute/CarDetail/CarDetail';
import SingleBedDetail from './components/DynamicRoute/SingleBedDetail/SingleBedDetail';
import DoubleBedDetail from './components/DynamicRoute/DoubleBedDetail/DoubleBedDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/carDetail/:carDetailId' element={<CarDetail></CarDetail>}></Route>
        <Route path='/singleBedDetail/:singleBedDetailId' element={<SingleBedDetail></SingleBedDetail>}></Route>
        <Route path='/doubleBedDetail/:doubleBedDetailId' element={<DoubleBedDetail></DoubleBedDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
```

#### 02. Set navigate: (___parameter-&-click___)

``` JavaScript
// In Car.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Car = ({car}) => {
    const {id} = car;
    const navigate = useNavigate();
    const handleNavigateToCarDetail = id => {
        navigate(`/carDetail/${id}`);
    }
    return (
        <div>
            <button onClick={() => handleNavigateToCarDetail(id)} type="button" className="btn btn-success">View Deal</button>
        </div>
    );
};

export default Car;
```

#### 03. Get invoiceId: (___getId___)

``` JavaScript
// In CarDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
    const {carDetailId} = useParams();
    return (
        <div>
            <h2>Welcome to CarDetail: {carDetailId}</h2>
        </div>
    );
};

export default CarDetail;
```

## 61.3 Navigate to services, 404 page, Login Component

### Navigate according to id in a single page:

``` JavaScript
<Nav.Link href="home#services">Services</Nav.Link>
<Nav.Link href="home#experts">Experts</Nav.Link>
<Nav.Link href="#about">About</Nav.Link>

return (
    <div id="services" className='container'>
        <div className='row'>
            <h1 className='text-primary text-center mt-5'>Our Services</h1>
            <div className='services-container'>
                {

                }
            </div>
        </div>
    </div>
);
```

---

### NotFound component Modified:

``` JavaScript
// In NotFound.js

import React from 'react';
import notFound from '../../../images/notFound.jpg';
import notFound2 from '../../../images/notFound2.jpg';

const NotFound = () => {
    return (
        <div className='d-flex flex-wrap align-items-center justify-content-center m-5'>
            <img className='w-50 mh-100' src={notFound} alt="404 Not Found" />
            <img className='w-50 mh-100' src={notFound2} alt="404 Not Found Sleeping" />
        </div>
    );
};

export default NotFound;
```

## 61.4 Style Login form using React-Bootstrap and use useRef hook to access input value

### useRef Hook:

⫸ `useRef Hook` is a hook that ___return___ a ___mutable reference object___.
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html "Hooks API Reference - reactjs.org") - [useRef](https://reactjs.org/docs/hooks-reference.html#useref "useRef - reactjs.org")
- Use `useRef` hook to ___access input value___
- If use `<Link>`, then doesn't need to use `navigate` (___only once___)

### Style Login form using Bootstrap:

``` JavaScript
// In Login.js

import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

    }

    const navigateRegister = event => {
        navigate('/signup');
    }

    return (
        <div className='container w-50 mx-auto my-5 p-5 border border-secondary border-opacity-25 rounded shadow-sm text-start'>
            <h2 className='text-primary text-center my-3'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'>New to Trivago? <Link  to='/signup' className='text-danger cursor-pointer text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            
        </div>
    );
};

export default Login;
```

## 61.5 Create Register form and style it using Vanilla CSS

⫸ `Style SignUp form using Vanilla CSS:`

``` JavaScript
// SignUp.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name' required />
                <input type="email" name="email" id="email" placeholder='Email Address' required />
                <input type="password" name="password" id="password" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link  to='/login' className='text-danger cursor-pointer text-decoration-none' onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default SignUp;
```

## 61.6 (optional) Environment variable for Firebase in Create React App | Get form data in 3 different ways

### Get Form data in 3 different ways:
1. State declare & onBlur EventHandler
2. useRef hook
3. event.target.email.value

#### State declare & onBlur EventHandler - [Login.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module60-responsive-react-website-and-react-recap/01genius-car-services/src/Pages/Login/Login.js "Demo_Code: Get form data using State declare & onBlur EventHandler | Login.js - genius-car-services")

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

#### useRef hook - [Login.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/SinglePage/Login/Login.js "Demo_Code: Get form data using useRef hook | Login.js - trivago-booking")

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

#### event.target.email.value - [SignUp.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/SinglePage/SignUp/SignUp.js "Demo_Code: Get form data using event.target.password.value | SignUp.js - trivago-booking")

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

### [Adding Custom Environment Variables:](https://create-react-app.dev/docs/adding-custom-environment-variables/ "Create React App Environment Variables - create-react-app.dev") (___Set Environment Variables___ for Firebase Config)
- Environment variables start/___declare___ with `REACT_APP_` like `REACT_APP_apiKey` 
- Get ___access___ environment variables `process.env.` like `process.env.REACT_APP_apiKey`
- Need to ___create a file___ in the ___root___ (___aside package.json___) of your project, ___start with___ `.env.` like `.env.local` or `.env.development.local` or `.env.test.local` or `.env.production.local` etc.
- Set `REACT_APP_environmentVariable=value` (set ___all the value___ in this format from ___firebaseConfig___ file)
  - `REACT_APP_apiKey=AIzaSyA2HadiuwqN7w-YroNe76VS8dVLMbmU1_o`
- Set `apiKey:process.env.REACT_APP_apiKey,` instead of `apiKey: "AIzaSyA2HadiuwqN7w-YroNe76VS8dVLMbmU1_o",` in ___firebaseConfig___ file

---

> `Get Initialize Firebase Code:` (___Project Overview > Project settings > Get Firebase Configuration Code___)

### Firebase Configuration without Environment Variables setup:

``` JavaScript
// In firebase.inti.js

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2HadiuwqN7w-YroNe76VS8dVLMbmU1_o",
  authDomain: "trivago-booking.firebaseapp.com",
  projectId: "trivago-booking",
  storageBucket: "trivago-booking.appspot.com",
  messagingSenderId: "766745666756",
  appId: "1:766745666756:web:13fe113c97e48e7097d591"
};
```

---

### Set Environment Variables for Firebase Configuration in Create React App:

``` JavaScript
// In .env.local

REACT_APP_apiKey=AIzaSyA2HadiuwqN7w-YroNe76VS8dVLMbmU1_o
REACT_APP_authDomain=trivago-booking.firebaseapp.com
REACT_APP_projectId=trivago-booking
REACT_APP_storageBucket=trivago-booking.appspot.com
REACT_APP_messagingSenderId=766745666756
REACT_APP_appId=1:766745666756:web:13fe113c97e48e7097d591
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

### After Setup Environment Variable: 

⫸ ___Run___ `npm start`, otherwise get some ___Error___

``` Terminal
npm start
```

> ⫸ `Notes:` <br /> &nbsp;&nbsp;&nbsp;&nbsp; ▶ `.env.local` looks like ___dim___, that means it will be `.gitignore` file. So, it ___doesn't go___ to the ___gitHub repo___. <br /> &nbsp;&nbsp;&nbsp;&nbsp; ▶ In `firebase.init.js` file, `id` ___don't go directly___, although we can get these `value` by a harder process. But it is `90% safe process` to ___hide___ Firebase configuration.

---

### Some Error are showing below: 

⫸ You could get this kind of error, if ___not run___ `npm start`

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

### KeyBoard Shortcut:

1. `Shift + Alt + F` = ___alignment format___ in JavaScript file
2. `Tab` = for ___right alignment___
3. `Shift + Tab` = for ___left alignment___
4. `Home` = to go ___starting position___ of any line
5. `End` = to go ___ending position___ of any line
6. `Ctrl + Alt + ↑` = ___multi-cursor on___
   - `Alt + clicked` = ___multi-cursor on___ and ___multi-cursor off___
   - `Ctrl + →` = go to the ___last position___ of ___every word___ and then ___type___
7. `Shift + End` = ___select all___


## 61.7 Email password based authentication with react firebase hooks

### Get Initialize Firebase Configuration Code: 

⫸ ___Project Overview > Project settings > Get Firebase Configuration Code___

---

### [Install react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks "react-firebase-hooks - gitHub.com")

``` Terminal
npm install --save react-firebase-hooks
```

### useCreateUserWithEmailAndPassword from react-firebase-hooks: ([SignUp.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/SinglePage/SignUp/SignUp.js "SignUp.js - trivago-booking"))

``` JavaScript
// In SignUp.js

import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [error2, setError2] = useState('');

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        
        if (password.length !== 8) {
            setError2('Password length should be 8 character long');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <form onSubmit={handleRegister}>
                { error2 ? <p className='text-danger text-center'>{error2}</p> : '' }
                { error && <p className='text-danger text-center'>{error.message}</p>}
                {
                    loading &&
                    <div className="d-flex align-items-center my-2">
                        <strong>Loading...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>
                }
            </form>
        </div>
    );
};

export default SignUp;
```

### useSignInWithEmailAndPassword from react-firebase-hooks: ([Login.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/SinglePage/Login/Login.js "Login.js - trivago-booking"))

``` JavaScript
// In Login.js

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                { error && <p className='text-danger text-center'>{error.message}</p>}
                {
                    loading &&
                    <div className="d-flex justify-content-center my-2">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            </Form>
        </div>
    );
};

export default Login;
```

### signOut from react-firebase-hooks: ([Header.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/Shared/Header/Header.js "Header.js - trivago-booking"))

``` JavaScript
// In Header.js

import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            {
                                user ? <button className='border border-light border-opacity-25 rounded text-light text-uppercase fw-normal bg-success' onClick={logout}>Sign Out</button>
                                :
                                    <>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
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

## 61.8 Introduction to Protected Route and Require Auth

### Create RequireAuth component: `Step-01`

⫸ Create ___Protected Route___ or ___RequireAuth___ component:

``` JavaScript
// In RequiteAuth.js

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
```

### Wrap the component with RequireAuth component: `Step-02`

⫸ ___which component___ need to be ___authenticate___ - ___Create Protected Route___

``` JavaScript
// In App.js

import RequireAuth from './components/SinglePage/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cars' element={<Cars></Cars>}></Route>
        <Route path='/carDetail/:carDetailId' element={
          <RequireAuth>
            <CarDetail></CarDetail>
          </RequireAuth>
        }></Route>
        <Route path='/singleBedDetail/:singleBedDetailId' element={
          <RequireAuth>
            <SingleBedDetail></SingleBedDetail>
          </RequireAuth>
        }></Route>
        <Route path='/doubleBedDetail/:doubleBedDetailId' element={
          <RequireAuth>
            <DoubleBedDetail></DoubleBedDetail>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About></About>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
```

### Implement Authentication Redirect: `Step-03`

``` JavaScript
// In Login.js

import { useLocation, useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    if (user) {
        navigate(from, {replace: true});
    }

    return (
        <div>

        </div>
    );
};

export default Login;
```

## 61.9 Create Checkout component and make it Protected Route

``` JavaScript
// In Checkout.js

import React from 'react';

const Checkout = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center'>Please Checkout your Booking</h2>
        </div>
    );
};

export default Checkout;
```

### Create a Button in CarDetail, SingleBedDetail, and DoubleBedDetail components:

``` JavaScript
// In CarDetail.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CarDetail = () => {
    const { carDetailId } = useParams();
    return (
        <div className='m-5'>
            <h2 className='text-center m-4'>Welcome to CarDetail: <span className='text-primary'>{carDetailId}</span></h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CarDetail;
```

## 61.10 Quiz

1. How you can pass `'key'` as a ___parameter___ in ___react-router-dom___?
   - `/:key`
2. what does ___useParams() returns___? 
   - `An object containing the parameters`
3. If we try to ___access "/" route___, which component will be ___rendered___? 
   - `<PageNotFound />`
``` JavaScript
<Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<PageNotFound />} />
</Routes>
```
4. Is the ___return value of useRef___ `mutable`?
   - `Yes`
5. Which one is ___false___ about ___useRef()___
   - [ ] useRef() creates a plain JavaScript object.
   - [ ] useRef() doesn't notify you when its content changes.
   - [x] ___Changing the .current property causes a re-render___
   - [ ] None of the above
6. What does ___useAuthState()___ from react-firebase-hooks ___returns___?
   - [ ] [error, user, loading]
   - [ ] [loading, user, error]
   - [x] ___[user, loading, error]___
   - [ ] [authState, user, error]
7. What is the full form of `"ENV"`?
   - `Environment Variable`
8. You must create custom `environment variables` ___beginning with___ ____ ?____
   - [ ] react_app_
   - [ ] React_App_
   - [ ] REACT_App_
   - [x] ___REACT_APP____
9.  How would you use `REACT_APP_SECRET_CODE=123456` in your code? 
    - `process.env.REACT_APP_SECRET_CODE`
10. How would you make `react-bootstrap` ___navbar stick to the top___ of the web page?
    - `<Navbar sticky="top" />`


### Firebase & Netlify Deploy

⫸ `Firebase Deploy:` [trivago-booking.web.app](https://trivago-booking.web.app/ "Firebase Hosting/Deploy - Live Website")

⫸ `Netlify Deploy:` [61-1trivago-booking-crescentpartha.netlify.app](https://61-1trivago-booking-crescentpartha.netlify.app/ "Netlify Deploy - Live Website")


---

# Module 62: Build a Authentication System for 60genius-car-services & 61trivago-booking

## 62.1 Module Overview and Social Login initial setup

⫸ `Create SocialLogin Component:`

``` JavaScript
// In SocialLogin.js

import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-primary w-50'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;
```

## 62.2 Style social login and share social login component

⫸ `Icon added and share component:`

``` JavaScript
// In SocialLogin.js

import React from 'react';
import google from '../../../images/google30.png';
import facebook from '../../../images/facebook30.png';
import github from '../../../images/github30.png';
import twitter from '../../../images/twitter30.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div className=''>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>GitHub Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={twitter} alt="" />
                    <span className='px-2'>Twitter Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
```

## 62.3 Implement Google Login System from react-firebase-hooks

⫸ `Steps to use firebase & (Google Authentication):` (___Recommended to Follow these 9 Steps___) (___Google Sign-in Provider___)
1. Create a ___new firebase project___ in ___console.firebase.google.com___
2. ___Register app___
3. `npm install firebase`
4. Create `firebase.init.js` file and ___import___ `getAuth` to ___export___ `auth`
5. Set ___Environment Variable___ for Firebase Configuration in Create React App
6. Create ___Google Sign In___ button with ___icon image___
7. Firebase settings > Authentication > Sign-in Method > Add new Provider > ___Enable___ Google ___authentication___
    - `In Firebase:` 
      - Put ___Project public-facing name___ > Put ___Project support email___ > ___Save___
    - `One account per email address:` 
      - If you need to create ___multiple user with same email address___ by using ___multiple sign in methods___
        - ___Change___ > ___Allow___ creation of multiple accounts with the same email address > ___Save___
      - Otherwise, ___get error___ like `Firebase: Error (auth/account-exists-with-different-credential).`
      - But, it ___should not be used___ in real application.
8. `npm install --save react-firebase-hooks` from [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks "React Hooks for Firebase - github")
9. ___Follow___ the steps of [useSignInWithGoogle](https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usesigninwithgoogle) & [social login example](https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#social-login-example)

⫸ `Examples:` [SocialLogin.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/SinglePage/SocialLogin/SocialLogin.js "SocialLogin.js - 01trivago-booking")

``` JavaScript
// In SocialLogin.js

import React from 'react';
import google from '../../../images/google30.png';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from 'react-bootstrap/Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <div className='text-center'>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            {
                loading &&
                <div className='text-center'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
            {errorElement}
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
```

⫸ `Note:` ___We can remove Google Permission___

⫸ `Add Authorized Domains:` (otherwise app doesn't work properly)
- __In Firebase:__
  - Authentication → Settings → Authorized domains → Add Domain → `https://trivago-booking.web.app/` (It will be the ___Homepage URL___ | ___App URL___)


## 62.4 Implement Github Login System and Allow multiple account

⫸ `Steps to use firebase & (Github Authentication):` (___Recommended to Follow these 9 Steps___) (___Github Sign-in Provider___)
1. Create a ___new firebase project___ in ___console.firebase.google.com___
2. ___Register app___
3. `npm install firebase`
4. Create `firebase.init.js` file and ___import___ `getAuth` to ___export___ `auth`
5. Set ___Environment Variable___ for Firebase Configuration in Create React App
6. Create ___Github Sign In___ button with ___icon image___
7. Firebase settings > Authentication > Sign-in Method > Add new Provider > ___Enable___ Github ___authentication___
    - `In Firebase:` 
      - Enable > Paste ___Client ID___ > Paste ___Client secret___ > Copy ___authorization callback URL___ > ___Save___
    - `In GitHub:` 
      - Settings > Developer settings > OAuth Apps > New OAuth App > Give ___Application name___ > Give ___Homepage URL___ (___localhost___ for development | ___App URL___ after Deploy) > Application description > Give ___Authorization callback URL___ > ___Register Application___
      - It gives ___Client ID___ & ___Client Secrets___ (Clicked on ___Generate a client secret___) > ___Update Application___
    - `One account per email address:` 
      - If you need to create ___multiple user with same email address___ by using ___multiple sign in methods___
        - ___Change___ > ___Allow___ creation of multiple accounts with the same email address > ___Save___
      - Otherwise, ___get error___ like `Firebase: Error (auth/account-exists-with-different-credential).`
      - But, it ___should not be used___ in real application.
8. `npm install --save react-firebase-hooks` from [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks "React Hooks for Firebase - github")
9. ___Follow___ the steps of [useSignInWithGithub](https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usesigninwithgithub) & [social login example](https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#social-login-example)

⫸ `Examples:` [SocialLogin.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/SinglePage/SocialLogin/SocialLogin.js "SocialLogin.js - 01trivago-booking")

``` JavaScript
// In SocialLogin.js

import React from 'react';
import google from '../../../images/google30.png';
import github from '../../../images/github30.png';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from 'react-bootstrap/Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || error1) {
        errorElement = <div className='text-center'>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            {
                (loading || loading1) &&
                <div className='text-center'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
```

⫸ `Note:` ___We can remove Github Permission___

⫸ `Add Authorized Domains:` (otherwise app doesn't work properly)
- __In Firebase:__
  - Authentication → Settings → Authorized domains → Add Domain → `https://trivago-booking.web.app/` (It will be the ___Homepage URL___ | ___App URL___)



