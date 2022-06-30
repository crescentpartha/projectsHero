// rsc - snippets for creating component automatically
import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid lime', margin: '5px', borderRadius: '10px'}}>
            <h3>This is Dial</h3>
            <p>Steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;