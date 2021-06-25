import React from 'react';
import './SharedFooter.css';
const SharedFooter = () => {
    return (
        <div className='footer-color'>
            <div className="container">
            <div className="row pt-5 pb-3">
                <div className="col-md-4 text-center text-light">
                    <h3>Our Address</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, cumque.</p>
                </div>
                <div className="col-md-4 text-center text-light">
                    <h3>Find Us On</h3>
                    <ul style={{listStyleType: "none"}}>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </div>
                <div className="col-md-4 text-center text-light">
                    <h3>More about us</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, dolorum.</p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default SharedFooter;