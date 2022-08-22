import React from 'react';
import useCountries from '../../../hooks/useCountries';
import Country from '../Country/Country';

const Countries = () => {
    const [countries] = useCountries();
    return (
        <div className='mt-5'>
            <h2>Top {countries.length} popular Countries in the world!</h2>
            <div className='container mb-5 align-items-center align-self-center'>
                <div className='row m-0 g-5 align-items-center'>
                    {
                        countries.map(country => <Country
                            key={country.id}
                            country={country}
                        ></Country>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;