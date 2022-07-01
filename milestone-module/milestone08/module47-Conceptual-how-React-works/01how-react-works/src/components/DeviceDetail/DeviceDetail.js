// rsc - snippets for creating component automatically | reactStatelessComponent
import React from 'react';

const DeviceDetail = (props) => {
    return (
        <div style={{border: '2px solid hotPink', margin: '20px', borderRadius: '10px'}}>
            <h3>Price: {props.price} <small className='component' style={{fontWeight: 600}}>(DeviceDetail)</small></h3>
        </div>
    );
};

export default DeviceDetail;