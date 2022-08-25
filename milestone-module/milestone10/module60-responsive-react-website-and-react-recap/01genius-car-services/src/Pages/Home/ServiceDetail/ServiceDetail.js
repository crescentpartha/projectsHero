import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceDetailId} = useParams();
    return (
        <div>
            <h2 className='text-center m-5'>Welcome to ServiceDetail: <span className='text-primary'>{serviceDetailId}</span></h2>
            <div className='text-center mb-5'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;