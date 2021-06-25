import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="m-5 p-5">
            <Link to="/allServices"><h3>All Services</h3></Link>
            <Link to="/addServices"><h3>Add Services</h3></Link>
        </div>
    );
};

export default SideBar;