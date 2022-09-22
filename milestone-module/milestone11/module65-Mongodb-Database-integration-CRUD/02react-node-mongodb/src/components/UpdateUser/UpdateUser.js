import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    // load id-wise individual data for display single user info
    useEffect( () => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name, email);

        const updatedUser = { name, email };

        // send data to the server 
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT', // if user exists in database, then update. Otherwise add user.
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success: ', data);
            alert('user updated successfully!!!');
            event.target.reset();
        })
    }

    return (
        <div className='my-5'>
            <h2>Updating User: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;