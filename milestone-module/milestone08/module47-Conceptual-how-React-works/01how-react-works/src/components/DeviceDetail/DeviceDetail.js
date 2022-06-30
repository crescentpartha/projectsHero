// rsc - snippets for creating component automatically
import React from 'react';

const DeviceDetail = (props) => {
    return (
        <div style={{border: '2px solid hotPink', margin: '5px', borderRadius: '10px'}}>
            <p>Price: {props.price}</p>
        </div>
    );
};

export default DeviceDetail;