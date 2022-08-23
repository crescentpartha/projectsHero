import React from 'react';
import { useParams } from 'react-router-dom';

const DoubleBedDetail = () => {
    const {doubleBedDetailId} = useParams();
    return (
        <div>
            <h2>Welcome to DoubleBedDetail: {doubleBedDetailId}</h2>
        </div>
    );
};

export default DoubleBedDetail;