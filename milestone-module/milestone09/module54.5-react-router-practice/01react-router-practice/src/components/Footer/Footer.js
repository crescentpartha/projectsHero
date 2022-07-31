import React from 'react';
import './Footer.css';
import github from '../../images/github-icon.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-left">
                <img src={github} alt="github-icon" />
                <p>&copy; 2022 GitHub, Inc.</p>
            </div>
            <div className="footer-right">
                <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" target='_blank' rel="noreferrer">Terms</a>
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target='_blank' rel="noreferrer">Privacy</a>
                <a href="https://github.com/security" target='_blank' rel="noreferrer">Security</a>
                <a href="https://www.githubstatus.com/" target='_blank' rel="noreferrer">Status</a>
                <a href="https://docs.github.com/en" target='_blank' rel="noreferrer">Docs</a>
                <a href="https://support.github.com/?tags=dotcom-footer" target='_blank' rel="noreferrer">Contact GitHub</a>
                <a href="https://github.com/pricing" target='_blank' rel="noreferrer">Pricing</a>
                <a href="https://docs.github.com/en" target='_blank' rel="noreferrer">API</a>
                <a href="https://services.github.com/" target='_blank' rel="noreferrer">Training</a>
                <a href="https://github.blog/" target='_blank' rel="noreferrer">Blog</a>
                <a href="https://github.com/about" target='_blank' rel="noreferrer">About</a>
            </div>
        </div>
    );
};

export default Footer;