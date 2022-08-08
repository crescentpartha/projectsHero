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
9.  Create ___google provider object___ and ___onClick Event Handler___ like `onClick={handleGoogleSignIn}` in a ___button___.
    - Go to docs → Build → Authentication → Web → Get Started → ___Password Authentication___
10. To sign in with ___a pop-up window___, call ___signInWithPopup___ with pass ___auth___ and ___provider___ parameters:
11. handle ___.then___ (if successful) and ___.catch___ error (if error)


