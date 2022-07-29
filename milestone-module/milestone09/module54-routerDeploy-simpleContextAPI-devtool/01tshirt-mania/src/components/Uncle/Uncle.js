import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [ , house, setHouse] = useContext(RingContext);
    // console.log(house);

    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h3>Uncle</h3>
            <p>House: {house}</p>
            { house < 3 || <button onClick={handleHouseIncrease}>Buy A House</button>}
        </div>
    );
};

export default Uncle;