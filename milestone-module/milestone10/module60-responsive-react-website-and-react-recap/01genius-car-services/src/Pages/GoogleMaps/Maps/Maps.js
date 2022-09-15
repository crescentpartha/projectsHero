import React, { useState } from 'react';
// import Direction from '../Direction/Direction';
// import MyLocation from '../MyLocation/MyLocation';

const Maps = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const displayDirection = event => {
        event.preventDefault();
        const start = event.target.origin.value;
        const end = event.target.destination.value;

        setOrigin(start);
        setDestination(end);

        // console.log(start, end);
    }
    return (
        <div>
            <h2 className='text-center my-4'>Google Maps</h2>
            <form onSubmit={displayDirection} className='d-flex flex-column w-25 m-4 mx-auto align-items-center'>
                <input type="text" name="origin" required />
                <br />
                <input type="text" name="destination" required />
                <br />
                <input type="submit" value="Show Direction" />
            </form>
            {/* <Direction origin={origin} destination={destination}></Direction> */}
            {/* <MyLocation></MyLocation> */}
        </div>
    );
};

export default Maps;