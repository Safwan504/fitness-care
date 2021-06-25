import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    const [service, setService] = useState({});
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://stormy-falls-41851.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                alert('Service added Successfully')
                history.replace("/");
            })
    }
    const handleOnBlur = (e) => {
        const newService = service;
        newService[e.target.name] = e.target.value;
        setService(newService);
    }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">
                    <SideBar/>
                </div>
                <div className="col-md-8">
                    <h3 className="m-5 text-center">Add Service</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onBlur={handleOnBlur} name="course" placeholder="Service Name" required /><br/><br/>
                        <input type="text" onBlur={handleOnBlur} name="duration" placeholder="duration"  required/><br/><br/>
                        <input type="text" onBlur={handleOnBlur} name="image" placeholder="img URL"  required/><br/><br/>
                        <input type="text" onBlur={handleOnBlur} name="description" placeholder="Description"  required/><br/><br/>
                        <input type="text" onBlur={handleOnBlur} name="fee" placeholder="Fee"  required/><br/><br/>
                        <button className="btn btn-success">Add Service</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;