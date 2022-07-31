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
            <h2>This is Repositories: {repository.length}</h2>
            {
                repository.map(repo => <Repository
                    key={repo.id}
                    repo={repo}
                ></Repository>)
            }
        </div>
    );
};

export default Repositories;