import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SignUp.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [error2, setError2] = useState('');
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target);
        // console.log(event.target.email);
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
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
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name' required />
                <input type="email" name="email" id="email-signup" placeholder='Email Address' required />
                <input type="password" name="password" id="password" placeholder='Password' required />

                { error2 ? <p className='text-danger text-center'>{error2}</p> : '' }
                { error && <p className='text-danger text-center'>{error.message}</p>}
                {
                    loading &&
                    <div className="d-flex align-items-center my-2">
                        <strong>Loading...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>
                }

                <input type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-danger cursor-pointer text-decoration-none' onClick={navigateLogin}>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;