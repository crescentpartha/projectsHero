import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {
    const { id } = useParams();
    return (
        <div className='my-3'>
            <h2>Update Products: {id}</h2>
        </div>
    );
};

export default UpdateProducts;