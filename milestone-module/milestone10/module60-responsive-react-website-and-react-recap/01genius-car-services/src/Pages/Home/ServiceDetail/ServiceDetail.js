import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);

    return (
        <div>
            <h2 className='text-center m-5'>You are about to book: <span className='text-primary'>{service.name}</span></h2>
            <div className='text-center mb-5'>
                <Link to={`/checkout/${serviceDetailId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;