import { useEffect, useState } from 'react';

const useCars = () => {
    const [cars, setCars] = useState([]);

    useEffect( () => {
        fetch('car.json')
        .then(res => res.json())
        .then(data => setCars(data));
    }, []);

    return [cars, setCars];
}

export default useCars;