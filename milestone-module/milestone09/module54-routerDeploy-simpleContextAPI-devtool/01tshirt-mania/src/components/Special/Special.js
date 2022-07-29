import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornament}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <p><small>Gift1: {ornament}</small></p>
            <p><small>Gift2: {ring}</small></p>
        </div>
    );
};

export default Special;