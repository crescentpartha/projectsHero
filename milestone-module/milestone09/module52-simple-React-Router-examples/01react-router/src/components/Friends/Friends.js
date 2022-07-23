import React, { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])

    return (
        <div style={{ backgroundColor: "cornSilk", padding: "10px", margin: "30px", borderRadius: "20px" }}>
            <div style={{ backgroundColor: "blanchedAlmond", padding: "5px", margin: "30px", borderRadius: "20px"}}>
                <h2>Hello <span style={{ color: "orange" }}>Friends</span>. How are you: <span style={{color: "orange"}}>{friends.length}</span></h2>
                <p><small>Parle kichu taka dhar dis...</small></p>
            </div>
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