import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);

        // POST a service from client-side to database
        const url = `https://serene-peak-34256.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast('Service added successfully!!!');
            navigate('/home');
        })
    };

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Please add a service</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' {...register("description", { required: true })} />
                <input placeholder='Price' type="number" {...register("price", { required: true })} />
                <input placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;