import React from 'react';
import { Link } from 'react-router-dom';
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
                    <span>New to Website?</span>
                    <Link to='/signup'>Create an account</Link>
                </p>
                <div className="or-container">
                    <hr /> <span>or</span> <hr />
                </div>
                <button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKZ9OYF0vsfYHFdozFXWdr6VBqSxu7mdHa5izCN7HWw&s" alt="google icon" />
                    <span>Continue with Google</span>
                </button>
                <button>
                    <img src="data:image/png;base64,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" alt="twitter icon" />
                    <span>Continue with Twitter</span>
                </button>
            </div>
        </div>
    );
};

export default Login;