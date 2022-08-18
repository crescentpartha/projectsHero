import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

// import carService from '../../../images/car-service.jpg';
// const services = [
//     { id: 1, name: 'oil change', price: 100, description: '', img: carService },
//     { id: 2, name: 'oil change', price: 100, description: '', img: 'https://ibb.co/yfV6hY1' },
//     { id: 3, name: 'oil change', price: 100, description: '', img: 'https://ibb.co/YQ4Rgr3' }
// ]

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div>
            <h2>Services: {services.length}</h2>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;