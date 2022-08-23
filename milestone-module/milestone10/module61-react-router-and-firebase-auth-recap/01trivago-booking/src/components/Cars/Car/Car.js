import React from 'react';
import { useNavigate } from 'react-router-dom';

const Car = ({car}) => {
    const {id, name, company, price, picture, bags, passengers, phone} = car;
    const navigate = useNavigate();
    const handleNavigateToCarDetail = id => {
        navigate(`/carDetail/${id}`);
    }
    return (
        <div className='col align-self-center border rounded border-success p-2 mx-2 border-opacity-25'>
            <div className=''>
                <div className='bg-secondary bg-opacity-25 rounded m-1 mx-3 p-3 flex-grow-1'>
                    <img className='rounded' width={300} src={picture} alt="" />
                </div>
                <div className='text-start px-2 text-justify'>
                    <div className='d-flex align-items-center justify-content-between '>
                        <div className='bg-secondary bg-opacity-25 rounded m-1 p-3 flex-grow-1'>
                            <h2>{name}</h2>
                            <p><span>{company}</span> | <span>{price}</span></p>
                            <p><span><b>Bags: </b>{bags}</span> | <span><b>Passengers: </b>{passengers}</span></p>
                            <p><b>Phone: </b>{phone}</p>
                            <button onClick={() => handleNavigateToCarDetail(id)} type="button" className="btn btn-success">View Deal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;