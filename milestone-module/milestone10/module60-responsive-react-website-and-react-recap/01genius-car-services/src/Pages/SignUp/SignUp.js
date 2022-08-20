import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/googleIcon.jpg';
import twitter from '../../images/twitterIcon.jpg';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <form>
                    <h1 className='form-title'>SignUp</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" required />
                    </div>
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