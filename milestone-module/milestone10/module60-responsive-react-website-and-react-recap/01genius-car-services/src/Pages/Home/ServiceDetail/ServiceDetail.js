import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceDetailId} = useParams();
    const [service, setService] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/service/${serviceDetailId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));

    }, [serviceDetailId]);

    return (
        <div>
            <h2 className='text-center m-5'>You are about to book: <span className='text-primary'>{service.name}</span></h2>
            <div className='text-center mb-5'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;