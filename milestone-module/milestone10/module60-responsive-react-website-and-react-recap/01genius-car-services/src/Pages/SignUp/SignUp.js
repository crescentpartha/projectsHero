import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/googleIcon.jpg';
import twitter from '../../images/twitterIcon.jpg';
import auth from '../../../src/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password.length !== 8 || confirmPassword.length !== 8) {
            setError('Your password should be 8 character length');
        }
        else if (password !== confirmPassword) {
            setError('Your two password do not match!!!');
        }
        else {
            setError('');
            createUserWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser}>
                    <h1 className='form-title'>SignUp</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="confirm-password" required />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='submit-button' type="submit" value="SignUp" />
                </form>
                <p>
                    <span>Already have an account?</span>
                    <Link to='/login'>Login</Link>
                </p>
                <div className="or-container">
                    <hr /> <span>or</span> <hr />
                </div>
                <p>SignUp with one of the following:</p>
                <div className='third-party-auth'>
                    <button>
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

export default SignUp;