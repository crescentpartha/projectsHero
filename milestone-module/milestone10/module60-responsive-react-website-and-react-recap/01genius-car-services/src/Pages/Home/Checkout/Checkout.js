import React from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';
import axios from 'axios';

const Checkout = () => {
    const {serviceDetailId} = useParams();
    const [service] = useServiceDetail(serviceDetailId);
    const [user] = useAuthState(auth);

    // if (user) {
    //     console.log(user);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceDetailId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response => {
            // console.log(response);
            const {data} = response;
            if (data.insertedId) {
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-center m-5'>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="phone" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;