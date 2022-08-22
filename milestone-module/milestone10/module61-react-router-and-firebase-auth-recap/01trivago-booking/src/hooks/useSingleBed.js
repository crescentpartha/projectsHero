import { useEffect, useState } from 'react';

const useSingleBed = () => {
    const [singleBeds, setSingleBeds] = useState([]);

    useEffect( () => {
        fetch('single-bed.json')
        .then(res => res.json())
        .then(data => setSingleBeds(data));
    }, []);

    return [singleBeds, setSingleBeds];
}

export default useSingleBed;