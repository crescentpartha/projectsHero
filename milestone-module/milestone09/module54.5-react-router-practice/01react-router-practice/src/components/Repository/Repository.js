import React from 'react';
import { Link } from 'react-router-dom';
import './Repository.css';

const Repository = (props) => {
    const { name, html_url, topics, visibility, description, default_branch } = props.repo;
    return (
        <div className='repo'>
            <div className='repo-name'>
                <Link to={html_url} target="_blank"><h2>{name}</h2></Link>
                <p>{visibility}</p>
            </div>
            <p>Description: {description}</p>
            <p>Default-Branch: {default_branch}</p>
            <p>Topics: &nbsp;
                {
                    topics.map(to => <span className='topics'>{to} </span>)
                }
            </p>
        </div>
    );
};

export default Repository;