import React from 'react';
import './Repository.css';

const Repository = (props) => {
    // console.log(props.repo);
    const { name, html_url, topics, visibility, description, default_branch } = props.repo;
    return (
        <div className='repo'>
            <div className='repo-name'>
                <a href={html_url} target="_blank" rel="noreferrer">{name}</a>
                <p>{visibility}</p>
            </div>
            <p><span className='title-color'>Description:</span> {description}</p>
            <p><span className='title-color'>Default-Branch:</span> {default_branch}</p>
            <p><span className='title-color'>Topics:</span> &nbsp;
                {
                    topics.map(to => <span className='topics'>{to} </span>)
                }
            </p>
        </div>
    );
};

export default Repository;