import React from 'react';
import { Row } from 'react-bootstrap';
import useDisplayProducts from '../../hooks/useDisplayProducts';
import ManageProductsDisplay from './ManageProductsDisplay';

const ManageProducts = () => {
    const [products] = useDisplayProducts();
    return (
        <div className='my-3'>
            <h2>Manage Products: {products.length}</h2>
            <Row xs={1} md={1} lg={1} style={{margin: '0 25%'}} className="g-4 my-3">
                {
                    products.map(product => <ManageProductsDisplay
                        key={product._id}
                        product={product}
                    ></ManageProductsDisplay>)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;