import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const { friendId } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [friendId])

    return (
        <div style={{ backgroundColor: "cornSilk", padding: "10px", margin: "30px", borderRadius: "20px" }}>
            {/* <h2>This is Detail of a Friend: {params.friendId}</h2> */}
            {<h2>This is one of my <span style={{ color: "orange" }}>Friend Detail</span>: <span style={{ color: "orange" }}>{friendId}</span></h2>}
            <div style={{backgroundColor: "bisque", margin: "10px", padding: "5px", borderRadius: "20px"}}>
                <h3>Name: {friend.name}</h3>
                <h4>Email: {friend.email}</h4>
                <h5>Website: {friend.website}</h5>
                <p><small>City: {friend.address?.city}</small></p>
                <p><small>Lat: {friend.address?.geo?.lat}</small></p>
            </div>
        </div>
    );
};

export default FriendDetail;