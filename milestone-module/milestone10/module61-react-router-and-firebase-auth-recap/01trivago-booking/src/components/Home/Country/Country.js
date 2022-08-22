import React from 'react';

const Country = ({ country }) => {
    const { countryName, city, price, picture, about } = country;
    return (
        <div className='col align-self-center border rounded border-success p-2 mx-2 border-opacity-25'>
            <div className='d-flex'>
                <img className='rounded-start' width={300} src={picture} alt="" />
                <div className='text-start px-2 text-justify'>
                    <h2>{countryName}</h2>
                    <p>{city}</p>
                    <p>{price}</p>
                    <p>{about.length > 100 ? about.slice(0, 100) + '...' : about}</p>

                </div>
            </div>
        </div>
    );
};

export default Country;