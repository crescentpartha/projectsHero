// import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `https://serene-peak-34256.herokuapp.com/order?email=${email}`;
            // const response = await axios.get(url);
            // const {data} = response;

            // Handle the Status Codes
            try {
                // const { data } = await axios.get(url, {
                //     // set headers
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
                //     }
                // });

                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                // console.log(error);
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth); // if token is expire or invalid, then logout.
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [user, navigate]);
    return (
        <div>
            <h2 className='text-center p-4'>Your Orders: {orders.length}</h2>
            <div className='mb-5'>
                {
                    orders.map(order => <div
                        className='bg-light py-3 my-3 mx-5 rounded'
                        key={order._id}
                    >
                        <p className='mb-0 text-center'>
                            Email: <span className='text-primary'>{order.email}</span> <br />
                            Service: <span className='fw-semibold'>{order.service}</span> <br />
                            Phone: <span className='fw-semibold'>{order.phone}</span> <br />
                            Address: <span className='fw-semibold'>{order.address}</span>
                        </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Order;