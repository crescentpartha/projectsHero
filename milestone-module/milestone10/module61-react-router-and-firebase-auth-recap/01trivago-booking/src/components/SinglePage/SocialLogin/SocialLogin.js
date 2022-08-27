import React from 'react';
import google from '../../../images/google30.png';
import facebook from '../../../images/facebook30.png';
import github from '../../../images/github30.png';
import twitter from '../../../images/twitter30.png';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithGithub, useSignInWithFacebook, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from 'react-bootstrap/Spinner';
// import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const [signInWithTwitter, user3, loading3, error3] = useSignInWithTwitter(auth);
    const navigate = useNavigate();

    // if (loading || loading1 || loading2 || loading3) {
    //     return <Loading></Loading>
    // }

    let errorElement;
    if (error || error1 || error2 || error3) {
        errorElement = <div className='text-center'>
            <p className='text-danger'>Error: {error?.message} {error1?.message} {error2?.message} {error3?.message}</p>
        </div>
    }

    if (user || user1 || user2 || user3) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {
                (loading || loading1 || loading2 || loading3) &&
                <div className='text-center'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button 
                    onClick={() => signInWithFacebook()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>GitHub Sign In</span>
                </button>
                <button 
                    onClick={() => signInWithTwitter()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={twitter} alt="" />
                    <span className='px-2'>Twitter Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;