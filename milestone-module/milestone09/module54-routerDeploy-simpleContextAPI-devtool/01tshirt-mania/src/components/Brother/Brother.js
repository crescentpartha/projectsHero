import React from 'react';

const Brother = ({house}) => {
    return (
        <div>
            <h4>Brother</h4>
            <p><small>House: <span className='number-color'>{house}</span></small></p>
        </div>
    );
};

export default Brother;