// rsc - snippets for creating component automatically | reactStatelessComponent
// rcc - snippets for creating component automatically | reactClassComponent
import React, { Component } from 'react';

class Tablet extends Component {
    render() {
        return (
            <div style={{border: '2px solid springGreen', margin: '20px', borderRadius: '10px'}}>
                <h3>This is <span className='component'>Tablet</span><small style={{color: 'darkTurquoise', fontWeight: 500}}> Class-Component</small></h3>
            </div>
        );
    }
}

export default Tablet;
