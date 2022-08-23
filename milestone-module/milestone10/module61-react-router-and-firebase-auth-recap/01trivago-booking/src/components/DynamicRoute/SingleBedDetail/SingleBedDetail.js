import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBedDetail = () => {
    const {singleBedDetailId} = useParams();
    return (
        <div>
            <h2>Welcome to SingleBedDetail: {singleBedDetailId}</h2>
        </div>
    );
};

export default SingleBedDetail;