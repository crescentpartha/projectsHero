// rsc - snippets for creating component automatically
import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid lime', margin: '20px', borderRadius: '10px'}}>
            <h3>This is <span className='component'>Dial</span></h3>
            <p style={{fontWeight: 700}}>Steps so far: {props.steps} <small style={{color: 'magenta'}}>(send state via props)</small></p>
        </div>
    );
};

export default Dial;