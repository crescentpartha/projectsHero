import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])
    return (
        <div style={{ backgroundColor: "cornSilk", padding: "10px", margin: "30px", borderRadius: "20px" }}>
            <h2>Every <span style={{ color: "orange" }}>posts</span> Facebook ever had: <span style={{color: "orange"}}>{posts.length}</span></h2>
            {
                posts.map(post => <Link 
                    key={post.id}
                    to={`/posts/${post.id}`}
                    >{post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;