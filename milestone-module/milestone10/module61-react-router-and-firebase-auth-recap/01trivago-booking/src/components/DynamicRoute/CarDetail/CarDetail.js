import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
    const {carDetailId} = useParams();
    return (
        <div>
            <h2>Welcome to CarDetail: {carDetailId}</h2>
        </div>
    );
};

export default CarDetail;