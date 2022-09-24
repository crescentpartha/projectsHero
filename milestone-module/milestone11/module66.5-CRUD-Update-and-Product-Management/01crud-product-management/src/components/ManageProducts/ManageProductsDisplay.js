import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageProductsDisplay = ({ product }) => {
    const { img, name } = product;
    return (
        <div>
            <Col>
                <Card>
                    <div className='d-flex flex-nowrap align-items-center justify-content-around'>
                        <Card.Img className='w-25 mx-5' variant="top" src={img} alt={name} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <button className='btn btn-outline-success w-50 mx-auto mb-2'>Delete</button>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProductsDisplay;