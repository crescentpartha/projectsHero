import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useLoadSingleProduct from '../../hooks/useLoadSingleProduct';

const UpdateProducts = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const [product] = useLoadSingleProduct(id);
    // console.log(product);

    const onSubmit = data => {
        // console.log(data);

        // Update a product in client-side and send to the server-side
        const url = `http://localhost:5000/product/${id}`;
        // console.log(url, id);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log('success', result);
            alert('Product updated successfully!!!');
            navigate('/');
        });
    };

    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Update Product: {product.name}</h2>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input value={product.name} placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input value={product.price} placeholder='Price' type="number" {...register("price", { required: true })} />
                <input value={product.quantity} placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input value={product.img} placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateProducts;