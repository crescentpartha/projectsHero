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

<!-- OR -->

npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
```

⫸ `Footer Component's Section:` (___FontAwesomeIcons & ImageIcons & Dynamic Date___ added in the [Footer.js](https://github.com/crescentpartha/projectsHero/blob/main/milestone-module/milestone10/module61-react-router-and-firebase-auth-recap/01trivago-booking/src/components/Shared/Footer/Footer.js "Footer component of 01trivago-booking App") component)

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

⫸ `Create Custom Hooks:` (Custom ___useCountries___ hooks)

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

⫸ `Use Custom Hooks:` (___Countries___ Component)

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

⫸ `Use Custom Hooks:` (___Country___ Component)

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

⫸ `Banners Component:` (3 images ___Carousel___ added)

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

⫸ `Single-Bed & Double-Bed Products Display in the Stays components:` 

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

⫸ `Cars Products Display in the Cars components:` 

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



