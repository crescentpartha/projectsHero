import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    // const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/signup');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='container w-50 mx-auto my-5 p-5 border border-secondary border-opacity-25 rounded shadow-sm text-start'>
            <h2 className='text-primary text-center my-3'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {error && <p className='text-danger text-center'>{error.message}</p>}
                {
                    loading &&
                    <div className="d-flex justify-content-center my-2">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'>New to Trivago? <Link to='/signup' className='text-primary cursor-pointer text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p className='text-center'>Forget Password? <Link to='/signup' className='text-primary cursor-pointer text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;