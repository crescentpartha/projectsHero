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

⫸ `CSS Media Query:` (___sample___)

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

