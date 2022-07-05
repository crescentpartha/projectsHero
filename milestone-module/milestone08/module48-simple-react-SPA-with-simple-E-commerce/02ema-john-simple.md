# Simple React SPA with Simple E-commerce

# 02ema-john-simple

## 48.1 Module Introduction, site resource, figma

- Use __figma file__ to design the site. 
- go to __figma.com__ and drag the figma file
- After that, start designing according to this file

⫸ __API Data Load:__
- products.json
- https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json

## 48.2 Header Component, logo position, set nav menu

``` CSS
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

## 48.3 Shop Component, component layout, display data

``` JavaScript
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
    }

    return (
        <div className='shop-container'> 
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};
```

## 48.4 Product Component, component layout, display data

``` JavaScript
const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, ratings } = props.product;
    // const {handleAddToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="img" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};
```
⫸ __Advanced way:__

``` JavaScript
const Product = ({product, handleAddToCart}) => {
    // console.log(props.product);
    // Destructuring 
    // const {product, handleAddToCart} = props;
    const {name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="img" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};
```

## 48.5 Style Product Cart, style debug and button position

- style __debug__ from using __chrome dev tools__

``` CSS
/* To set "Add to Cart" button in the bottom of the product div */
.product {
    position: relative;
}
.btn-cart {
    position: absolute;
}
```

## 48.6 (advanced) set eventhandler, pass eventhandler to Child

``` JavaScript
// set eventhandler in parent component (Shop.js)
const handleAddToCart = (product) => {
    console.log(product);
}
```

``` JavaScript
// set eventhandler to pass data from child to parent (Product.js)

// const {handleAddToCart} = props;

<button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
    <p>Add to Cart</p>
</button>
```

## 48.7 (advanced) Cart state setup, update cart and total on click

``` CSS
/* Use media query to responsive product div (Shop.css) */
@media screen and (max-width:1100px) {
    .products-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

``` JavaScript
const Shop = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        // console.log(product);.
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
};
```

## 48.8 Install external packages, react-fontawesome, display icon

## 48.9 Simple React SPA module summary

## 48.10 (Bonus) Deploy Simple React website to Netlify

## Quiz: