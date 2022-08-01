import React from 'react';
import './HomeLeftSide.css';
import partha from '../../images/partha.jpg';
import code from '../../images/code-evaluation.png';
import pull from '../../images/pull-shark-default.png';

const HomeLeftSide = () => {
    return (
        <div className='leftside-container'>
            <div className="leftside-body1">
                <div className='body1-part1'>
                    <img src={partha} alt="Author" />
                    <div>
                        <p className='body1-p1'><span className='light-color'>Crescent Partha</span></p>
                        <p className='body1-p2'><span className='deem-color'>crescentpartha</span></p>
                    </div>
                </div>
                <button><span className='light-color'>Edit profile</span></button>
                <p className='deem-color'><span className='light-color'>9</span> followers <span className='light-color'>. 46</span> following</p>
            </div>
            <div className="leftside-body2">
                <p className='body2-p1'><span className='light-color'>Achievements</span></p>
                <img src={pull} alt="pull-shark-default" />
                <p className='body2-p2'><span className='body2-p2-1'>Beta</span> <span className='body2-p2-2'>Send feedback</span></p>
            </div>
            <div className="leftside-body3">
                <p className='body3-p1'><span className='light-color'>Organizations</span></p>
                <img src={code} alt="code-evaluation" />
            </div>
        </div>
    );
};

export default HomeLeftSide;