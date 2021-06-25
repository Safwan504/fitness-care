import React, { useEffect, useState } from 'react';
import AddReview from '../AddReview/AddReview';
import NavBar from '../SharedComponents/NavBar/NavBar';
import SingleCourse from '../SingleCourse/SingleCourse';
import './MyCourses.css';

const MyCourses = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    const [myCourses, setMyCourses] = useState([]);
    useEffect(() => {
        fetch(`https://stormy-falls-41851.herokuapp.com/registration/${user.email}`)
            .then(res => res.json())
            .then(data => setMyCourses(data))

    }, [user.email]);

    return (
        <div className="custom-background">
            <NavBar />
            <div className="container">
                <div className="row text-light">
                    <h2 className="mt-5 text-center">My Courses</h2>
                    {
                        myCourses.map(course => <SingleCourse course={course} key={course._id}></SingleCourse>)
                    }
                </div>
            </div>
            <AddReview></AddReview>


        </div>
    );
};

export default MyCourses;