// rsc - snippets for creating component automatically
import React, { useState } from 'react';
import './Mobile.css';

const Mobile = () => {
    const [battery, setBattery] = useState(100);

    const PercentageIncrease = () => {
        if (battery <= 90) {
            const newCharge = battery + 10;
            setBattery(newCharge);
        }
    }

    const PercentageDecrease = () => {
        if (battery >= 10) {
            const newCharge = battery - 10;
            setBattery(newCharge);
        }
    }

    return (
        <div className="mobile rounded text-bg-light m-3">
            <h2>Battery: <span>{battery}%</span></h2>
            <button onClick={PercentageDecrease} className="fw-normal m-2 btn btn-outline-warning">Battery Down</button>
            <button onClick={PercentageIncrease} className="fw-normal m-2 btn btn-outline-success">Battery Up</button>
        </div>
    );
};

export default Mobile;