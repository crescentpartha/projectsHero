// rsc - snippets for creating component automatically
import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border: '2px solid green', margin: '5px', borderRadius: '10px'}}>
            <h2>Name: {props.name}</h2>
            <p style={{fontWeight: 700}}>So far steps today: {props.steps} <small style={{color: 'magenta'}}>(send state via props)</small></p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;