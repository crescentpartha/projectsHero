import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [postId]);

    return (
        <div style={{ boxShadow: "2px 2px 10px gray", margin: "40px 20px", padding: "20px", borderRadius: "20px" }}>
            <h2>This is <span style={{ color: "orange" }}>Post Detail</span> for: <span style={{ color: "orange" }}>{postId}</span></h2>
            <div style={{backgroundColor: "bisque", margin: "10px", padding: "5px", borderRadius: "20px"}}>
                <h4>{post.title}</h4>
                <p><small>{post.body}</small></p>
            </div>
        </div>
    );
};

export default PostDetail;