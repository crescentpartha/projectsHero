import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [ornament2, house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Aunty</h3>
            <p>House: <span className='number-color'>{house}</span></p>
            <p><small>Gift: {ornament2}</small></p>
            { house >= 4 && <button className='orange-button' onClick={() => setHouse(house + 1)}>Buy a House</button>}
        </div>
    );
};

export default Aunty;