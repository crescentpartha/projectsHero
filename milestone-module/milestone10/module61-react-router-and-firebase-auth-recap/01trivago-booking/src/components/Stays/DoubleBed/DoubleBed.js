import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoubleBed = ({bed}) => {
    const { id, name, company, distance, price, picture, email, phone, address, about } = bed;
    const navigate = useNavigate();
    const handleNavigateToDoubleBedDetail = id => {
        navigate(`/doubleBedDetail/${id}`);
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
                            <p><b>Distance: </b>{distance}</p>
                            <p><b>Email: </b>{email}</p>
                            <p><b>Phone: </b>{phone}</p>
                            <p><b>Address: </b>{address}</p>
                            <button onClick={() => handleNavigateToDoubleBedDetail(id)} type="button" className="btn btn-success">View Deal</button>
                        </div>
                    </div>
                    <div className='bg-secondary bg-opacity-25 rounded m-1 p-3 flex-grow-1'>
                        <p><b>Description: </b>{about.length > 100 ? about.slice(0, 100) + '...' : about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoubleBed;