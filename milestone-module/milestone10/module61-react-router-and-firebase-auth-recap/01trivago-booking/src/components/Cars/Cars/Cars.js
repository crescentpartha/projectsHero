import React from 'react';
import logo from '../../../images/trivago-logo.png';
import useCars from '../../../hooks/useCars';
import Car from '../Car/Car';

const Cars = () => {
    const [cars] = useCars();
    return (
        <div>
            <div className='d-flex flex-wrap gap-3 m-5 align-items-center justify-content-center'>
                <img width={100} height={50} src={logo} alt="trivago" />
                <div className='border-start border-2 border-secondary border-opacity-25 ps-3'>
                    <h4>Deals from your favorite booking sites</h4>
                    <p>Try searching for a city, a specific hotel, or even a landmark!</p>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='fs-3'>See what's popular Cars available among {cars.length} with other travelers!!!</h2>
                <div className='container mb-5 align-items-center align-self-center'>
                    <div className='row m-0 g-5 align-items-center'>
                        {
                            cars.map(car => <Car
                                key={car.id}
                                car={car}
                            ></Car>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;