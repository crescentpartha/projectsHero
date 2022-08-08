# Module 57: Email Password Authentication, Login Form

## 57.1 Login, Registration, Sign up, Sign in, project setup

⫸ `Steps to use firebase:` (___Recommended to Follow these 11 Steps___)

1. ___Create a project___ on console.firebase.google.com
2. ___Register___ Web app in firebase
3. ___npm install firebase___
4. ___copy___ firebase init with config from ___firebase project settings___ into a file called ___firebase.init.js___ in ___src folder___
5. ___export default app___ from ___firebase.init.js___
6. import ___getAuth___ from ___firebase/auth___ and create `const auth = getAuth(app);` in ___App.js___
   - Go to docs → Build → Authentication → Web → Get Started → ___Initialize Firebase Authentication___
7. import ___app___ from ___firebase.init.js___ into your ___App.js___
8. ___turn on___ google authentication (___firebase > authentication > enable Email/Password sign-in___)
   - Authentication → Get Started → ___Email/Password___ → ___Enable___ → Save
   - One account per email address (___if___ you need to create multiple user with same email address by using multiple sign in methods)
9.  Create ___a password-based account___ and ___onClick Event Handler___ like `onClick={handleGoogleSignIn}` in a ___button___.
    - Go to docs → Build → Authentication → Web → Get Started → ___Password Authentication___
10. To sign in with ___a pop-up window___, call ___signInWithPopup___ with pass ___auth___ and ___provider___ parameters:
11. handle ___.then___ (if successful) and ___.catch___ error (if error)

## 57.2 Simple form, input, change, blur, submit, preventDefault

``` JavaScript
// import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {

  const handleEmailChange = event => {
    console.log(event.target.value);
  }

  const handlePasswordChange = event => {
    console.log(event.target.value);
  }

  /* ------------------------------------- */

  const handleEmailBlur = event => {
    console.log(event.target.value);
  }

  const handlePasswordBlur = event => {
    console.log(event.target.value);
  }

  const handleFormSubmit = event => {
    console.log('form submitted');
    event.preventDefault(); // to prevent reload;
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        // onChange method isn't efficient, it hits the methods multiple times.
        <input onChange={handleEmailChange} type="email" name="" id="" />
        <input onChange={handlePasswordChange} type="password" name="" id="" />

        /* ----------------------------------------------------------------------- */

        // Use onBlur for better efficiency.
        <input onBlur={handleEmailBlur} type="email" name="" id="" />
        <br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
        <br />
        <input type="submit" value="LogIn" />
      </form>
    </div>
  );
}

export default App;
```

``` Terminal
npm install react-bootstrap bootstrap
```

## 57.3 Use Bootstrap Form and get user email and password

``` JavaScript
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const auth = getAuth(app);

function App() {

  const handleEmailBlur = event => {
    console.log(event.target.value);
  }

  const handlePasswordBlur = event => {
    console.log(event.target.value);
  }

  const handleFormSubmit = event => {
    console.log('form submitted');
    event.preventDefault(); // to prevent reload;
  }

  return (
    <div className="App">
      <div className="registration w-50 mx-auto mt-5">
        <h2 className="text-primary">Please Register</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
```

