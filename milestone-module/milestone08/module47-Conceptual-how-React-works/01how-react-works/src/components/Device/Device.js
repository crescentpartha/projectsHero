// rsc - snippets for creating component automatically | reactStatelessComponent
import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div style={{border: '2px solid cyan', margin: '20px', borderRadius: '10px'}}>
            <h3>I have: {props.name} <span className='component'>Device</span></h3>
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;