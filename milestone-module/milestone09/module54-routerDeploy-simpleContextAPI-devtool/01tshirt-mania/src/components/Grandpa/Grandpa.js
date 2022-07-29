import React from 'react';
import './Grandpa.css';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h2>Grand Pa</h2>
            <section style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;