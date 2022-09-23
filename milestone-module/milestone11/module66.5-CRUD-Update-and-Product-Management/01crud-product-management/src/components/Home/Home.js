import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

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