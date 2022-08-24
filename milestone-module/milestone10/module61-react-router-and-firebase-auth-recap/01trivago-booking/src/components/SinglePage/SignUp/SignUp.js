import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name' required />
                <input type="email" name="email" id="email" placeholder='Email Address' required />
                <input type="password" name="password" id="password" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link  to='/login' className='text-danger cursor-pointer text-decoration-none' onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default SignUp;