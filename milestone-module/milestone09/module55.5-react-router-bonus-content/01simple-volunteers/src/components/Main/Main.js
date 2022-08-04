import React, { useEffect, useState } from 'react';
import './Main.css';
import Activity from '../Activity/Activity';

const Main = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, []);

    return (
        <div>
            <h2>Main</h2>
            <h2>Volunteer Activities: {volunteers.length}</h2>
            <div className="activity-container">
                {
                    volunteers.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;