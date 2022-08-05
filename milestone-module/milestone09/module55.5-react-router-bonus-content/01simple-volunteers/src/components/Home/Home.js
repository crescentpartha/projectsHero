import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [count, setCount] = useState(0);
    const number = 56;
    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        <div className='main-body'>
            <div className='home-container'>
                <button onClick={increaseCount}>Click Me</button>
                <br />
                <p>Count: {count}</p>
                <h4>My Number: {number}</h4>
                <h2>Count: {count}</h2>
                <h4><small>Double Count: {count * 2}</small></h4>
            </div>
        </div>
    );
};

export default Home;