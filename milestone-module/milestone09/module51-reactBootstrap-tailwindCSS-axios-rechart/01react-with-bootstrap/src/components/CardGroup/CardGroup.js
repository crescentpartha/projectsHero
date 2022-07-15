import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Laptop Pro', price: 125000 },
        { id: 2, name: 'Laptop Crow', price: 145000 },
        { id: 3, name: 'Laptop Grow', price: 150000 }
    ]
    return (
        <div>
            <h2>This is my Cards</h2>
            <div className="card-group">
                {
                    products.map(product => <Card
                        product={product}
                        key={product.id}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;