// rsc - snippets for creating component automatically
import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h2>React: Unidirectional Data Flows (One way Binding)</h2>
            <h3>I have: {props.name}</h3>
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;