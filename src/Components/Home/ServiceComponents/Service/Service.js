import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { course, description, fee, image, duration, _id } = service;
    return (
        <div className="col-md-6 mt-3 mb-3">
            <div className=" shadow rounded m-3 p-3 h-100 text-light">
                <img className="img-fluid" src={image} alt="" />
                <h3>{course}</h3>
                <p className="text-secondary">{description}</p>
                <p>{fee} / {duration}</p>
                <Link to={`/enroll/${_id}`}><button className="btn btn-success">Enroll Now</button></Link>
                
            </div>
        </div>
    );
};

export default Service;