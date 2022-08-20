import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/googleIcon.jpg';
import twitter from '../../images/twitterIcon.jpg';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <form>
                    <h1 className='form-title'>Login</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
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

export default Login;