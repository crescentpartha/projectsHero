import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceDetailId} = useParams();
    return (
        <div>
            <h2 className='text-center m-5'>Welcome to ServiceDetail: <span className='text-primary'>{serviceDetailId}</span></h2>
        </div>
    );
};

export default ServiceDetail;