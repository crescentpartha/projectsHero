# Module 57: Email Password Authentication, Login Form

## 57.1 Login, Registration, Sign up, Sign in, project setup

⫸ `Two things make confused:`
- ___Sign In___, ___Log In___ (same)
- ___Sign Up___, ___Register___, ___Registration___ (same)

⫸ `Steps to use firebase:` (___Recommended to Follow these 11 Steps___)

1. ___Create a project___ on console.firebase.google.com
2. ___Register___ Web app in firebase
3. ___npm install firebase___
4. ___copy___ firebase init with config from ___firebase project settings___ into a file called ___firebase.init.js___ in ___src folder___
5. ___export default app___ from ___firebase.init.js___
6. import ___getAuth___ from ___firebase/auth___ and create `const auth = getAuth(app);` in ___App.js___
   - Go to docs > Build > Authentication > Web > Get Started > ___Initialize Firebase Authentication___
7. import ___app___ from ___firebase.init.js___ into your ___App.js___
8. ___turn on___ Email/Password authentication (___firebase > authentication > enable Email/Password sign-in___)
   - Authentication > Get Started > ___Email/Password___ > ___Enable___ > Save
   - One account per email address (___if___ you need to create multiple user with same email address by using multiple sign in methods)<br />It ___should not be used___ in real application.
9.  Create ___a password-based account___
    - Go to docs > Build > Authentication > Web > Get Started > ___Password Authentication___
10. Use ___Form___ to get ___name___, ___email___, and ___password___ and by using those, users can ___Register___ or ___Sign-In___. 
    - Call ___createUserWithEmailAndPassword___ and ___signInWithEmailAndPassword___ with ___auth___, ___email___ and ___password___ parameters.
    - Use ___onClick___, ___onChange___, and ___onBlur___ event handlers to ___get value___ of ___PasswordReset___, ___RegisteredChange___, ___Name___, ___Email___, ___Password___.
    - Set some ___Event Handlers___ such as ___handlePasswordReset___, ___handleRegisteredChange___, ___handleNameBlur___, ___handleEmailBlur___, ___handlePasswordBlur___.
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

## 57.4 Create new user using email and password on firebase

``` JavaScript
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = event => {
    // console.log('form submitted', email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then( result => {
      const user = result.user;
      console.log(user);
    })
    .catch( error => {
      console.error(error);
    })
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

## 57.5 Login form field validation using regular expression, slow error 

⫸ [JavaScript Password Validation Regex (Regular Expression)](https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters "Javascript regular expression password validation having special characters - stackoverflow.com")

⫸ `Regex for Password:`

``` JavaScript
/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
```
- `Restrictions:` (___Note:___ I have used ___>>___ and ___<<___ to show the important characters)
  1. ___Minimum 8___ characters ___{>>8,20}___
  2. ___Maximum 20___ characters ___{8,>>20}___
  3. At least ___one uppercase___ character ___(?=.*[A-Z])___
  4. At least ___one lowercase___ character ___(?=.*[a-z])___
  5. At least ___one digit___ __(?=.*\d)__
  6. At least ___one special character___ __(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]__

``` JavaScript
// Regular Expression in JS

/(?=.*?[0-9])/.test('asdsd') // false
/(?=.*?[0-9])/.test('asdsd2') // true
/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test('a4*Ap') // false
/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test('a4*Apa') // true

/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test('1Aa&6789') // true

/(?=.*[!@#$%^&*])/.test('a') // false
/(?=.*[!@#$%^&*])/.test('&') // true
```

``` JavaScript
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = event => {

    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError('Password should contain at least one special character');
      return;
    }
    setValidated(true);
    setError('');
    // console.log('form submitted', email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
    event.preventDefault(); // to prevent reload;
  }

  return (
    <div className="App">
      <div className="registration w-50 mx-auto mt-5">
        <h2 className="text-primary">Please Register</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <p className="text-danger">{error}</p>
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

## 57.6 Toggle Registration and login, implement sign in with email & password

⫸ `Password Authentication:`

``` JavaScript
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleRegisteredChange = event => {
    // console.log(event.target.checked);
    setRegistered(event.target.checked);
  }

  const handleFormSubmit = event => {

    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError('Password should contain at least one special character');
      return;
    }
    setValidated(true);
    setError('');

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
      .then( result => {
        const user = result.user;
        console.log(user);
      })
      .then( error => {
        console.error(error);
        setError(error.message);
      })
    }
    else {
      // console.log('form submitted', email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }
    event.preventDefault(); // to prevent reload;
  }

  return (
    <div className="App">
      <div className="registration w-50 mx-auto mt-5">
        <h2 className="text-primary">Please {registered ? 'LogIn' : 'Register'}!!</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <Button variant="primary" type="submit">
            {registered ? 'LogIn' : 'Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
```

## 57.7 Handle Email Verification, Forget Password or Reset Password

⫸ `Manage Users > Send a user a verification email:`

⫸ `Manage Users > Send a password reset email:`

``` JavaScript
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleRegisteredChange = event => {
    // console.log(event.target.checked);
    setRegistered(event.target.checked);
  }

  const handleFormSubmit = event => {

    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError('Password should contain at least one special character');
      return;
    }
    setValidated(true);
    setError('');

    if (registered) {
      // console.log(email, password);
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .then(error => {
          console.error(error);
          setError(error.message);
        })
    }
    else {
      // console.log('form submitted', email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
          verifyEmail();
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }
    event.preventDefault(); // to prevent reload;
  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
    .then( () => {
      console.log('email sent');
    })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email Verification Sent');
      })
  }

  return (
    <div className="App">
      <div className="registration w-50 mx-auto mt-5">
        <h2 className="text-primary">Please {registered ? 'LogIn' : 'Register'}!!</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button>
          <br />
          <Button variant="primary" type="submit">
            {registered ? 'LogIn' : 'Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
```

## 57.8 Module Summary and Update user name to firebase

⫸ `Manage Users > Update a user's Profile:`

``` JavaScript
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from './firebase.init';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState('');

  const handleNameBlur = event => {
    setName(event.target.value);
  }

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleRegisteredChange = event => {
    // console.log(event.target.checked);
    setRegistered(event.target.checked);
  }

  const handleFormSubmit = event => {

    event.preventDefault(); // to prevent reload;
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    // Regular Expression: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
    if (!/(?=.*[a-z])/.test(password)) {
      setError('Password should contain at least one lowercase character');
      return;
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
      setError('Password should contain at least one uppercase character');
      return;
    }
    else if (!/(?=.*\d)/.test(password)) {
      setError('Password should contain at least one digit character');
      return;
    }
    else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError('Password should contain at least one special character');
      return;
    }
    else if (!/(?=.{8,20})/.test(password)) {
      setError('Password length should be 8-20 character');
      return;
    }
    setValidated(true);
    setError('');

    if (registered) {
      // console.log(email, password);
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .then(error => {
          console.error(error);
          setError(error.message);
        })
    }
    else {
      // console.log('form submitted', email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
          verifyEmail();
          setUserName();
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }
    event.preventDefault(); // to prevent reload;
  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email sent');
        setResetPassword('Check email to reset password')
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
        console.log('Updating Name');
      })
      .catch( error => {
        setError(error.message);
      })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email Verification Sent');
        setSuccess('Verify your email address');
      })
  }

  return (
    <div className="App">
      <div className="registration w-50 mx-auto mt-5">
        <h2 className="text-primary">Please {registered ? 'LogIn' : 'Register'}!!</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {!registered && <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>

          <p className="text-danger">{error}</p>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
          </Form.Group>

          <p className="text-success">{success}</p>
          <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button>
          <br />
          <p className='text-danger'>{resetPassword}</p>
          <Button variant="primary" type="submit">
            {registered ? 'LogIn' : 'Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
```

## Quiz:

1. ___Which file contains___ the information of ___packages of libraries___ that you have ___installed___ for your project using npm install?
   - `package.json`
2. Which ___input event___ will you use on an input tag to get notified every time a ___user changes something___?
   - `onChange`
3. Which ___method___ will you call to open the ___google auth provider___?
   - `signInWithPopup`
``` JavaScript
__?__(auth, googleProvider)
  .then(result => {
  const {user}= result
  }
```
4. Which ___Bootstrap class___ will you use to provide a ___responsive full-width container___?
   - `.container-fluid`
5. How will you get the ___input value___ from the ___checkbox___?
   - `e.target.checked`
6. How will you ___console the text___ an user typed on the ___email input box___?
   - `e.target.value`
``` JavaScript
const handleEmailChange = ( e )=> { 
  console.log(__?___) 
}
```
7. What should you ___import___ to do ___firebase authentication___ with ___email___ and ___password___?
   - `import {createUserWithEmailAndPassword} from 'firebase/auth';`
8. ___What___ will the function ___console do___?
   - `undefined`
``` JavaScript
const showName = (name) => {
     return 
     console.log(name)
  }
showName(“Crush”)
```
9. What is ___Regex___?
   - `Regular Expression`
10. Which ___method___ should you call to ___stop___ Form tag from ___reloading___?
    - `e.preventDefault()`
11. What ___event handler___ detects ___click outside___ of the ___input field___?
    - `onBlur`
12. Which ___third-party___ authentication provider ___is not available___ in firebase?
    - `LinkedIn`
13. Which one is the correct ___Regular Expression___ to check if a string contains ___at least one uppercase___ English Alphabet?
    - `(?=.*?[A-Z])`
14. What you need to pass as ___parameter___ in ___sendEmailVarification___? 
    - `auth.currentUser`
``` JavaScript
const auth = getAuth(app)
const emailVarification = () => {
sendEmailVarification(___?___).then(() => console.log("Email send"))
```
15. ___Where___ you can ___edit the email template___ of "Email Address Verification" in firebase?
    - `Build > Authentication > Templates > Email > Address Varification`


