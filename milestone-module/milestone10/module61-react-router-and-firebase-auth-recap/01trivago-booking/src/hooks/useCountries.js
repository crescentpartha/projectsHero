import { useEffect, useState } from 'react';

const useCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        fetch('country.json')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    return [countries, setCountries];
}

export default useCountries;