import React, { useEffect, useState } from 'react';
import RegistrationList from '../RegistrationList/RegistrationList';
import SideBar from '../SideBar/SideBar';

const AllServices = () => {

    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('https://stormy-falls-41851.herokuapp.com/registrations')
            .then(res => res.json())
            .then(data => setAllCourses(data))

    }, []);


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">
                    <SideBar></SideBar>
                </div>

                <div className="col-md-8">
                    <h3 className="m-5 text-center">All Service</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Service Name</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCourses.map(courses => <RegistrationList courses={courses} key={courses._id}></RegistrationList>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllServices;