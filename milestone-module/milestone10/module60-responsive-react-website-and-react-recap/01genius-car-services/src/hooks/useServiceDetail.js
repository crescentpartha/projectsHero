import { useEffect, useState } from "react";

const useServiceDetail = serviceDetailId => {
    const [service, setService] = useState({});

    useEffect( () => {
        const url = `https://serene-peak-34256.herokuapp.com/service/${serviceDetailId}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));

    }, [serviceDetailId]);

    return [service, setService];
}

export default useServiceDetail;