import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center m-5'>Please Order: {service.name}</h2>
            <form>
                <input type="text" name="name" placeholder='Name' required />
            </form>
        </div>
    );
};

export default Checkout;