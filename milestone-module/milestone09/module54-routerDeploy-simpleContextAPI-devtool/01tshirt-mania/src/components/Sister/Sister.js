import React from 'react';

const Sister = ({house}) => {
    return (
        <div>
            <h4>Sister</h4>
            <p><small>House: <span className='number-color'>{house}</span></small></p>
        </div>
    );
};

export default Sister;