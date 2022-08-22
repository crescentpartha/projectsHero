import { useEffect, useState } from 'react';

const useDoubleBed = () => {
    const [doubleBeds, setDoubleBeds] = useState([]);

    useEffect( () => {
        fetch('double-bed.json')
        .then(res => res.json())
        .then(data => setDoubleBeds(data));
    }, []);

    return [doubleBeds, setDoubleBeds];
}

export default useDoubleBed;