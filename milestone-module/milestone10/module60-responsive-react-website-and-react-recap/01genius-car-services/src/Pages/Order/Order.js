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
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
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
            <h2>Your Orders: {orders.length}</h2>
        </div>
    );
};

export default Order;