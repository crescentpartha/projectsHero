import React from 'react';

const FollowingDetail = (props) => {
    const { login, html_url, avatar_url } = props.users;
    return (
        <div className='follower-container'>
            <img src={avatar_url} alt={login} />
            <a href={html_url} target='_blank' rel="noreferrer">{login}</a>
        </div>
    );
};

export default FollowingDetail;