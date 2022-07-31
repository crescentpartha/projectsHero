import React, { useEffect, useState } from 'react';
import Follower from '../Follower/Follower';
import './Followers.css';

const Followers = () => {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/crescentpartha/followers')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setFollowers(data));
    }, []);

    return (
        <div className='followers-container'>
            <h2>Total Followers: <span className='title-color'>{followers.length}</span></h2>
            <div className='followers-map-container'>
                {
                    followers.map(follower => <Follower
                        key={follower.id}
                        follower={follower}
                    ></Follower>)
                }
            </div>
        </div>
    );
};

export default Followers;