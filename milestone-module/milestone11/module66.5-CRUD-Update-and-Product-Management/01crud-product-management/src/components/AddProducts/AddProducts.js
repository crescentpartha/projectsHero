import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        // POST a product form client-side to database
        const url = `http://localhost:5000/product`;
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
        })
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Add a product</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Price' type="number" {...register("price", { required: true })} />
                <input placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;