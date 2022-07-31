import React from 'react';
import './Home.css';
import CustomLink from '../CustomLink/CustomLink';
import { Outlet } from 'react-router-dom';
import HomeLeftSide from '../HomeLeftSide/HomeLeftSide';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-image">
                <HomeLeftSide></HomeLeftSide>
            </div>
            <div className="home-routing">
                <nav className="home-nav">
                    <CustomLink to='repositories'>Repositories</CustomLink>
                    <CustomLink to='followers'>Followers</CustomLink>
                    <CustomLink to='notFound'>Not Found</CustomLink>
                </nav>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;