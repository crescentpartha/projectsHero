import React from 'react';
import './NotFound.css';
import notFound from '../../../images/notFound.gif';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    return (
        <div className='notFound-container'>
            <PageTitle title="Not Found"></PageTitle>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;