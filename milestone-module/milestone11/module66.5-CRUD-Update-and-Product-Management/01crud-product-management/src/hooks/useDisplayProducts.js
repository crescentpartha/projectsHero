const { useState, useEffect } = require("react");

const useDisplayProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return [products, setProducts];
}

export default useDisplayProducts;