import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

// import carService from '../../../images/car-service.jpg';
// const services = [
//     { id: 1, name: 'oil change', price: 100, description: '', img: carService },
//     { id: 2, name: 'oil change', price: 100, description: '', img: 'https://ibb.co/yfV6hY1' },
//     { id: 3, name: 'oil change', price: 100, description: '', img: 'https://ibb.co/YQ4Rgr3' }
// ]

const Services = () => {
    // use custom hook to load services data
    const [services] = useServices();

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/service')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, []);

    return (
        <div id="services">
            <h1 className='services-title'>Our Services: <span>{services.length}</span></h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;