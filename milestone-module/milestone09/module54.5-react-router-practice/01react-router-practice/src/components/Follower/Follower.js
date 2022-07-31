import React from 'react';
import './Follower.css';

const Follower = (props) => {
    const {avatar_url, html_url, login} = props.follower;
    return (
        <div className='follower-container'>
            <img src={avatar_url} alt={login} />
            <a href={html_url} target='_blank' rel="noreferrer">{login}</a>
        </div>
    );
};

export default Follower;