// rsc - snippets for creating component automatically
import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

/* 
    How states works:
        - Click button → Call event handler by onClick method → stateful value + 1
        - new stateful value assign to a variable → then passing by a function 
        - this function delivery(dispatch) a Action to useState → useState check value is different or not
        - if different, then check the UI (where will be changed) → find + rerender + change stateful value & give us
        [stateful value = steps | function = setSteps]
    
    Asynchronous:
        - [function = setSteps] is asynchronous like setTimeout()
        - State update is asynchronous.

    Solutions (To print latest value): setInterval(), setTimeout(), useEffect()
        useEffect():
            - does not depend on anyone/anything. But, sometimes could depend on one value called "stateful value" (Execute multi-time)
            - if we set empty array, then execute only one. 
            - if we don't given any empty array, then it executes multiple times. (normally not used, by default making mistake)
            - latest value need to get asynchronous way by useEffect().
*/

const Watch = () => {
    const [steps, setSteps] = useState(0); // Hook

    // Event Handler
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
        // console state | State update is asynchronous
        console.log(steps); // updated value you don't find, because function is asynchronous
    }

    // useEffect( () => { // it does not depend on anyone/anything.
    //     console.log('Hello');
    // }, []) // if we set empty array, then execute only one. 

    // // normally not used, by default making mistake.
    // useEffect( () => { // it does not depend on anyone/anything.
    //     console.log('Hello');
    // }) // if we doesn't set empty array, then execute multiple times. 

    useEffect( () => { // it depends on one value (steps).
        console.log(steps); // console state
    }, [steps]) // DependencyList // How many times steps changed, update it.  

    return (
        <div style={{border: '2px solid purple', margin: '20px', borderRadius: '10px'}}>
            <h2>This is my smart <span className='component'>Watch</span></h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour........</button>
            <Display name="Display" steps={steps}></Display>
        </div>
    );
};

export default Watch;