import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house, ornament}) => {
    return (
        <div>
            <h4>MySelf</h4>
            <p><small>House: <span className='number-color'>{house}</span></small></p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;