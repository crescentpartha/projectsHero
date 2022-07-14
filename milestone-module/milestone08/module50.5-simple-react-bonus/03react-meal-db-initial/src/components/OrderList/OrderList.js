import React from 'react';

const OrderList = (props) => {
    const { orders } = props;
    console.log(orders);

    // we can solve it in one line code by using Reduce. Try it.
    let count = 0; 
    for (const meal of orders) {
        count = count + meal.quantity;
    }

    return (
        <div>
            <h2>Order List</h2>
            <h4>Items Ordered: {count}</h4>
        </div>
    );
};

export default OrderList;