import React, { useState } from 'react';
import './Grandpa.css';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    // const house = 7;
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div className='grandpa'>
            <h2>Grand Pa</h2>
            <p>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                House: {house}
            </p>
            <section style={{ display: 'flex' }}>
                <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;