import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornament}) => {
    const [ornament2, house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <p><small>Gift1: {ornament}</small></p>
            <p><small>Gift2: {ornament2}</small></p>
            <p><small>House: {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Buy A House</button>
        </div>
    );
};

export default Special;