import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [ornament2, house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Aunty</h3>
            <p>House: {house}</p>
            <p><small>Gift: {ornament2}</small></p>
            { house >= 4 && <button onClick={() => setHouse(house + 1)}>Buy a House</button>}
        </div>
    );
};

export default Aunty;