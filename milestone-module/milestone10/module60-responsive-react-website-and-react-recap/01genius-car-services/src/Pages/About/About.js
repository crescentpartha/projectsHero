import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <h2 className='about-title'>Get in Touch with the Car Doctor Expert Team</h2>
            <div className='about-carts'>
                <div className="about-cart1">
                    <h2>Already touch on Expert Team?</h2>
                    <p>Have questions related to your current services or subscription? Click the button below.</p>
                    <input type="button" value="I am one of the Car Doctor partner" />
                </div>
                <div className="about-cart2">
                    <h2>New to The Car Doctor?</h2>
                    <p>Have a question or want to know more about how to become a partner on Car Doctor and grow your car services business? Click the button below.</p>
                    <input type="button" value="I am new to The Car Doctor" />
                </div>
            </div>
            <div className='about-links'>
                <div className="about-link1">
                    <h4>Services</h4>
                    <p>Beginner's guide</p>
                    <p>Resources for Brand Owners</p>
                    <p>Services across Europe</p>
                    <p>Build an online services</p>
                </div>
                <div className="about-link2">
                    <h4>Fulfil services</h4>
                    <p>Fulfillment by Car Doctor</p>
                    <p>FBA New Selection Program</p>
                    <p>Fulfil in Europe</p>
                    <p>FBA Small and Light</p>
                    <p>Multi-Channel Fulfillment</p>
                </div>
                <div className="about-link3">
                    <h4>Programmes</h4>
                    <p>Global Services</p>
                    <p>Advertising</p>
                    <p>Handmade</p>
                    <p>Launchpad</p>
                    <p>Deals and Vouchers</p>
                    <p>Services Partner 360</p>
                    <p>See all Programmes</p>
                </div>
                <div className="about-link4">
                    <h4>Resources</h4>
                    <p>Central Services</p>
                    <p>VAT Knowledge Centre</p>
                    <p>Events and Webinars</p>
                    <p>Resources for Developers</p>
                    <p>Reports</p>
                    <p>Careers</p>
                </div>
            </div>
        </div>
    );
};

export default About;