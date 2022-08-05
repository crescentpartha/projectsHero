import React, { useEffect, useState } from 'react';
import './Main.css';
import Activity from '../Activity/Activity';
// import useVolunteers from '../../hooks/useVolunteers';

const Main = () => {
    // const [volunteers] = useVolunteers();
    const [searchText, setSearchText] = useState('');
    // const [searchResult, setSearchResult] = useState(volunteers); // initially set all volunteers data to set volunteers.
    const [searchResult, setSearchResult] = useState([]);

    useEffect( () => {
        console.log('Inside the use Effect');
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const match = data.filter(d => d.title.toLowerCase().includes(searchText));
            setSearchResult(match);
        })
    }, [searchText]); // dependency injection;

    const handleSearchChange = event => {
        setSearchText(event.target.value);
    }

    // const handleSearchChange2 = event => {
    //     // console.log(event.target.value);
    //     const searchText = event.target.value;
    //     const match = volunteers.filter(v => v.title.toLowerCase().includes(searchText));
    //     setSearchResult(match);
    // }

    return (
        <div className='main-body'>
            <h2>Volunteer Activities: {searchResult.length}</h2>
            <div style={{'margin': '20px'}}>
                <input onChange={handleSearchChange} type="text" placeholder='search' />
            </div>
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;