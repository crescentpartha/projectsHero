import React from 'react';
import { Row } from 'react-bootstrap';
import useDisplayProducts from '../../hooks/useDisplayProducts';
import Product from './Product';

const Home = () => {
    const [products] = useDisplayProducts();

    return (
        <div className='my-3 mx-5'>
            <h2>Available Product: {products.length}</h2>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Row>
        </div>
    );
};

export default Home;