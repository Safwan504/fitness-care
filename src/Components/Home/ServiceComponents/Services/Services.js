import React, { useEffect, useState } from 'react';
// import fakeData from '../../../../fakeData/fakeData.json'
import Service from '../Service/Service';
import './Services.css'
const Services = () => {

//     const handleAddAll = () => {
//         fetch('https://stormy-falls-41851.herokuapp.com/addCourses',{
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(fakeData)
//     })
//     .then(res => res.json())
//     .then(data=> console.log(data))
// }
    const[serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('https://stormy-falls-41851.herokuapp.com/courses')
        .then(res => res.json())
        .then(data=> setServiceData(data))
    }, []);

    return (
        <section className="service-section d-flex align-items-center">

            <div className="container mt-3 mb-3">
                <h1 className="text-center mt-5 p-3 custom-bg">Our Offers</h1>
                <div className="row">
                    {/* <button onClick={handleAddAll}>add all</button> */}
                    {
                        serviceData.map(service => <Service service={service} key={service._id}></Service>)
                    }
                </div>
            </div>
        </section>

    );
};

export default Services;