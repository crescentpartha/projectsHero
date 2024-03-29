// import axios from 'axios';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import google from '../../images/googleIcon.jpg';
import twitter from '../../images/twitterIcon.jpg';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [token] = useToken(user || googleUser);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // if (googleUser) {
    //     navigate(from, { replace: true });
    // }

    if (token) {
        navigate(from, { replace: true }); // we navigate after getting the token
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    // After login, we issue a token
    const handleUserSignIn = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);

        // const {data} = await axios.post('https://serene-peak-34256.herokuapp.com/login', {email});
        // console.log(data);
        // localStorage.setItem('accessToken', data.accessToken); // localStorage isn't the best place to set accessToken, we can set it in the cookies for extra-security.
        // navigate(from, { replace: true }); // we navigate after getting the token 
    }

    return (
        <div className='form-container'>
            <PageTitle title="Login"></PageTitle>
            <div>
                <form onSubmit={handleUserSignIn}>
                    <h1 className='form-title'>Login</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                    </div>
                    {
                        loading
                        &&
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                    }
                    {
                        googleLoading
                        &&
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                    }
                    {
                        error && <p style={{ color: 'red' }}>{error.message}</p>
                    }
                    {
                        googleError && <p style={{ color: 'red' }}>{googleError.message}</p>
                    }
                    <input className='submit-button' type="submit" value="Login" />
                </form>
                <p>
                    <span>No account yet?</span>
                    <Link to='/signup'>Create an account</Link>
                </p>
                <div className="or-container">
                    <hr /> <span>or</span> <hr />
                </div>
                <p>Login with one of the following:</p>
                <div className="third-party-auth">
                    <button onClick={() => signInWithGoogle()}>
                        <img src={google} alt="google icon" />
                        <span>Google</span>
                    </button>
                    <button>
                        <img src={twitter} alt="twitter icon" />
                        <span>Twitter</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;