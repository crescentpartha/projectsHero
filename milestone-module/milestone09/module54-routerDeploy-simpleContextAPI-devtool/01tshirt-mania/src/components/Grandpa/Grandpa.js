import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('Diamond');

const Grandpa = () => {
    // const house = 7;
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';
    const ornament2 = 'Golden Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[ornament2, house, setHouse]}>
            <div className='grandpa'>
                <h2>Grand Pa</h2>
                <p>
                    <button className='orange-button' onClick={handleBuyAHouse}>Buy A House</button>
                    House: <span className='number-color'>{house}</span>
                </p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;