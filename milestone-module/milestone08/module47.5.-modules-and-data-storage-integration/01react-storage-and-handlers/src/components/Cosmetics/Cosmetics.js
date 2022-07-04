// rsc - snippets for creating component automatically | reactStatelessComponent
import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/calculate'; // if not default, then import like a object;
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';
// import add from '../../utilities/calculate'; // if default;

const Cosmetics = () => {
    const first = 55; 
    const second = 66; 
    const total = add(first, second);

    // Data Generate System No: 01
    // const cosmetics = [
    //     {id: 1, name: 'Alta', price: 100}, 
    //     {id: 2, name: 'Palis', price: 200}, 
    //     {id: 3, name: 'Malis', price: 300}, 
    //     {id: 4, name: 'Balis', price: 400}, 
    //     {id: 5, name: 'Nalis', price: 500}
    // ]

    // Data Generate System No: 02 (json-generator)
    // const cosmetics = [
    //     {
    //       "id": "62c0931f912f5dc9bd357458",
    //       "price": 724,
    //       "name": "Ruthie Nash"
    //     },
    //     {
    //       "id": "62c0931f9054587abe7baee9",
    //       "price": 1037,
    //       "name": "Lolita Jarvis"
    //     },
    //     {
    //       "id": "62c0931ff90b12c0c949a17a",
    //       "price": 2586,
    //       "name": "Cooley Robinson"
    //     },
    //     {
    //       "id": "62c0931f19131f46b7a151b5",
    //       "price": 1489,
    //       "name": "Betty Joyce"
    //     },
    //     {
    //       "id": "62c0931f2a763e72bbacd2e8",
    //       "price": 741,
    //       "name": "Daugherty Klein"
    //     },
    //     {
    //       "id": "62c0931f53b614ba0ef9d579",
    //       "price": 2486,
    //       "name": "Willa Mathews"
    //     },
    //     {
    //       "id": "62c0931ffbfd7543d904c8ef",
    //       "price": 3114,
    //       "name": "Anthony Martinez"
    //     }
    // ]

    // Data Generate System No: 03 (Data set by fetch)
    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setCosmetics(data));
    }, [])

    return (
        <div className='container'>
            <div className='products'>
                <h1>Welcome to my Cosmetics Store</h1>
                <p>Total: {total}</p>
            </div>
            {
                // cosmetics.map(cosmetic => console.log(cosmetic))
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id} 
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;