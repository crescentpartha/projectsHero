import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    // const {signInWithGoogle} = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    let location = useLocation();
    let navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( () => {
            navigate(from, {replace: true});
        })
    }
    return (
        <div style={{margin: "50px 20%", borderRadius: "20px", padding: "20px 0", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"}}>
            <h3>Please Login Now!!!</h3>
            <div style={{margin: '20px'}}>
                {/* <button onClick={signInWithGoogle}>Google Sign In</button> */}
                {/* <button onClick={() => signInWithGoogle()}>Google Sign In</button> */}
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;