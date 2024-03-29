import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            // delete a user in client-side and send to the server-side
            console.log('Deleting user with id, ', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    console.log('Deleted');
                    // remove deleted user from the state in client-side for better user experience
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
        }
    }

    return (
        <div className='my-5'>
            <h2>Available Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >
                        {user.name} :: {user.email}
                        {/* added Update button in the Home component */}
                        <Link className='mx-2' to={`/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handleUserDelete(user._id)}>Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;