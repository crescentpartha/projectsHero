import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id: id, name, price, quantity, img } = product;

    const navigate = useNavigate();
    const handleNavigateToUpdateProduct = id => {
        navigate(`/updateProduct/${id}`);
    }

    return (
        <Col>
            <Card>
                <Card.Img className='w-75 mx-auto' variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className='d-flex align-items-center justify-content-around'>
                        <Card.Text className='mb-0'>Price: <span className='fw-semibold'>{price}</span></Card.Text>
                        <Card.Text>Quantity: <span className='fw-semibold'>{quantity}</span></Card.Text>
                    </div>
                </Card.Body>
                <div className='d-flex flex-nowrap gap-2 mx-2 align-items-center justify-content-around'>
                    <button className='btn btn-outline-success w-50 mx-auto mb-2' onClick={() => handleNavigateToUpdateProduct(id)}>Update</button>
                    <Link className='btn btn-outline-success w-50 mx-auto mb-2' to='/manageProducts'>Delete</Link>
                </div>
            </Card>
        </Col>
    );
};

export default Product;