import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useDisplayProducts from '../../hooks/useDisplayProducts';

const ManageProductsDisplay = ({ product }) => {
    const [products, setProducts] = useDisplayProducts();
    const { img, name } = product;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            console.log('Deleting product with id = ', id);
            
            // delete a product in client-side and send to the server-side
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                // console.log(data?.deletedCount);
                if (data.deletedCount > 0) {
                    console.log('Deleted');
                    // remove deleted service from the state in client-side for better user experience
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            });
        }
    }

    return (
        <div>
            <Col>
                <Card>
                    <div className='d-flex flex-wrap flex-md-nowrap flex-lg-nowrap align-items-center justify-content-around'>
                        <Card.Img className='w-25 mx-5' variant="top" src={img} alt={name} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <button className='btn btn-outline-success w-50 mx-auto mb-2' onClick={() => handleDelete(product._id)}>Delete</button>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProductsDisplay;