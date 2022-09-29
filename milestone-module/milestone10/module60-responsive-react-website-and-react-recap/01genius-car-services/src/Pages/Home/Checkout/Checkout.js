import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);
    const [user, setUser] = useState({
        name: 'Akbar The Great',
        email: 'akbar@momo.taj',
        address: 'Tajmohol Road Md.pur',
        phone: '01711111111'
    });

    const handleAddressChange = event => {
        console.log(event.target.value);
        const {address, ...rest} = user;
        // console.log(address, rest);
        const newAddress = event.target.value;
        const newUser = {address: newAddress, ...rest};
        console.log(newUser);
        setUser(newUser);
    }

    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-center m-5'>Please Order: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" value={user.name} name="name" placeholder='name' required />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name="email" placeholder='email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" onChange={handleAddressChange} value={user.address} name="address" placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="phone" value={user.phone} name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;