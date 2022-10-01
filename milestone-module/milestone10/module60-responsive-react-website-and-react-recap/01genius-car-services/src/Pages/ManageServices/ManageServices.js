import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            // delete a service in client-side and send to the server-side
            console.log('Deleting service with id, ', id);

            const url = `https://serene-peak-34256.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    console.log('Deleted');
                    
                    // remove deleted service from the state in client-side for better user experience
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;