// Create a Custom Hook without dependency
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        // fetch('http://localhost:5000/product')
        fetch('https://sleepy-sea-74931.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return [products, setProducts];
}

export default useProducts;