import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        return <p className='text-danger'>{error.message}</p>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

    if (!user.emailVerified) {
        return <div className='m-5' style={{textAlign: 'center'}}>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'>Please, Verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;