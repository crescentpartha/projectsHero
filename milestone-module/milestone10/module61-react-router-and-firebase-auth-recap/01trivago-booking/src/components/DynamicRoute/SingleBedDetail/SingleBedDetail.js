import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleBedDetail = () => {
    const { singleBedDetailId } = useParams();
    return (
        <div className='m-5'>
            <h2 className='text-center m-4'>Welcome to SingleBedDetail: <span className='text-primary'>{singleBedDetailId}</span></h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleBedDetail;