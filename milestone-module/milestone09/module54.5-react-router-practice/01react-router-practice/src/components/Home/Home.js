import React from 'react';
import './Home.css';
import CustomLink from '../CustomLink/CustomLink';
import { Outlet } from 'react-router-dom';
import HomeLeftSide from '../HomeLeftSide/HomeLeftSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faUserGroup, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-image">
                <HomeLeftSide></HomeLeftSide>
            </div>
            <div className="home-routing">
                <nav className="home-nav">
                    <CustomLink to='repositories'><FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>Repositories</CustomLink>
                    <CustomLink to='followers'><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>Followers</CustomLink>
                    <CustomLink to='following'><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>Following</CustomLink>
                    <CustomLink to='notFound'><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>Not Found</CustomLink>
                </nav>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;