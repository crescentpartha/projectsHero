import React from 'react';
import './Home.css';
import partha from '../../images/partha.jpg';
import CustomLink from '../CustomLink/CustomLink';
import Repositories from '../Repositories/Repositories';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-image">
                <img src={partha} alt="Author" />
                <p>Crescent Partha</p>
                <p>9 followers . 46 following</p>
            </div>
            <div className="home-routing">
                <div className="home-nav">
                    <CustomLink to='/repositories'>Repositories</CustomLink>
                    <CustomLink to='/notFound'>Not Found</CustomLink>
                </div>
                <div className="home-body">
                    <Repositories></Repositories>
                </div>
            </div>
        </div>
    );
};

export default Home;