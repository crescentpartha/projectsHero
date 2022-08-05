import React from 'react';
import './Main.css';
import Activity from '../Activity/Activity';
import useVolunteers from '../../hooks/useVolunteers';

const Main = () => {
    const [volunteers] = useVolunteers();

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