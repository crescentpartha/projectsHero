import React, { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data));
    },[])

    return (
        <div>
            <h2>Hello Friends. How are you: {friends.length}</h2>
            <p><small>Parle kichu taka dhar dis...</small></p>
            {
                friends.map(friend => <Friend
                    friend={friend}
                    key={friend.id}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;