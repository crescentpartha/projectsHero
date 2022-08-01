import React, { useEffect, useState } from 'react';
import FollowingDetail from '../FollowingDetail/FollowingDetail';

const Following = () => {
    const [following, setFollowing] = useState([]);

    useEffect( () => {
        fetch('https://api.github.com/users/crescentpartha/following')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setFollowing(data));
    }, []);
    
    return (
        <div className='followers-container'>
            <h2>Total Followers: <span className='title-color'>{following.length}</span></h2>
            <div className='followers-map-container'>
                {
                    following.map(users => <FollowingDetail
                        key={users.id}
                        users={users}
                    ></FollowingDetail>)
                }
            </div>
        </div>
    );
};

export default Following;