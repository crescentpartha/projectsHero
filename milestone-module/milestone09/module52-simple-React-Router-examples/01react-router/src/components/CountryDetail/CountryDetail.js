import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    return (
        <div style={{ backgroundColor: "cornSilk", padding: "10px", margin: "30px", borderRadius: "20px" }}>
            <h2><span style={{ color: "orange" }}>Country Detail</span> for: {countryName}</h2>
        </div>
    );
};

export default CountryDetail;