import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import google from '../../../images/google-play.png';
import store from '../../../images/app-store.png';

const Footer = () => {
    return (
        <div className='bg-secondary p-2'>
            <div className='d-flex flex-wrap justify-content-around m-5'>
                <p className='text-light'>Want to receive exclusive hotel offers? Subscribe to our newsletter!</p>
                <div className='d-flex'>
                    <input type="email" className='form-control' name="email" id="email" placeholder='Email address' />
                    <button type="button" className="btn btn-success">Subscribe</button>
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-center m-5'>
                <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
                    <p className='text-light text-uppercase m-0'>Download:</p>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img className='m-2' src={google} alt="Google Download" />
                        <img className='m-2' src={store} alt="App Store Download" />
                    </div>
                </div>
                <div className='d-flex flex-wrap align-items-center justify-content-center px-2'>
                    <p className='text-light text-uppercase m-0'>Follow Us:</p>
                    <div className='d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon className='m-1 fs-4' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='m-1 fs-4' icon={faTwitter}></FontAwesomeIcon>
                        <FontAwesomeIcon className='m-1 fs-4' icon={faInstagram}></FontAwesomeIcon>
                        <FontAwesomeIcon className='m-1 fs-4' icon={faYoutube}></FontAwesomeIcon>
                        <FontAwesomeIcon className='m-1 fs-4' icon={faLinkedin}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div>
                <hr className='text-light' />
                <div className='d-flex justify-content-between flex-wrap text-start my-5 mx-5'>
                    <div className='text-light mb-2'>
                        <h4 className='text-uppercase'>Programme</h4>
                        <p>Company</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Inventor relations</p>
                    </div>
                    <div className='text-light mb-2'>
                        <h4 className='text-uppercase'>Resources</h4>
                        <p>Mobile apps - searching on the go</p>
                        <p>Trivago Business Studio</p>
                    </div>
                    <div className='text-light mb-2'>
                        <h4 className='text-uppercase'>Helps</h4>
                        <p>Learn how trivago works</p>
                        <p>Terms and conditions</p>
                        <p>Legal Information</p>
                        <p>Do not sell my personal Information</p>
                        <p>Privacy notice</p>
                        <p>Cyber Security</p>
                        <p>Coronavirus (COVID-19) travel advice</p>
                    </div>
                </div>
            </div>
            <div className='text-light'>
                <hr />
                <h2>trivago</h2>
                <p>Copyright &copy;{new Date().getFullYear()} | All rights reserved by <span className='text-warning'>trivago</span></p>
            </div>
        </div>
    );
};

export default Footer;