// import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log('working');
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        // console.log('error', error);
        console.error('error', error);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then( result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch( error => {
      console.error(error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        // Conditional Rendering: { condition ? true : false }
        user.uid ? <button onClick={handleSignOut}>Sign Out</button>
        : 
        // To return multiple value use div-tag or fragment-tag(empty tag)
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      }
      <h2>Name: {user.displayName}</h2>
      <p>I know your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;