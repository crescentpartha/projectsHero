import React from 'react';
import useDisplayProducts from '../../hooks/useDisplayProducts';

const ManageProducts = () => {
    const [products] = useDisplayProducts();
    return (
        <div className='my-3'>
            <h2>Manage Products: {products.length}</h2>
        </div>
    );
};

export default ManageProducts;