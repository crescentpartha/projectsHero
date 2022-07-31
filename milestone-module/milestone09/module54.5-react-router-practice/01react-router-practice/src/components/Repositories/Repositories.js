import React, { useEffect, useState } from 'react';
import Repository from '../Repository/Repository';
import './Repositories.css';

const Repositories = () => {
    const [repository, setRepository] = useState([]);

    useEffect( () => {
        fetch('https://api.github.com/users/crescentpartha/repos')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setRepository(data));

    }, []);
    return (
        <div className='repositories-container'>
            <h2>Total Repositories: <span className='title-color'>{repository.length}</span></h2>
            {
                repository.map(repo => <Repository
                    key={repo.name}
                    repo={repo}
                ></Repository>)
            }
        </div>
    );
};

export default Repositories;