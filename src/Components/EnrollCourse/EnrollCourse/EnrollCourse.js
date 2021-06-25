import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EnrollCourse = () => {

    const history = useHistory();
    const { id } = useParams();
    const [course, setCourse] = useState({});

    const user = JSON.parse(localStorage.getItem('user'));

    const [registrationData, setRegistrationData] = useState({
        userName: user.name,
        email: user.email,
    })

    const handleSubmit = (e) => {
        fetch('https://stormy-falls-41851.herokuapp.com/addRegistration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registrationData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Enrolled Successfully')
                history.replace("/");
            })
        e.preventDefault();
    }
    useEffect(() => {
        fetch(`https://stormy-falls-41851.herokuapp.com/course/${id}`)
            .then(res => res.json())
            .then(data => {
                setCourse(data);
                const newRegistrationData = { ...registrationData }
                newRegistrationData.courseName = data.course
                newRegistrationData.courseDescription = data.description
                newRegistrationData.courseFee = data.fee
                setRegistrationData(newRegistrationData);
            })
    }, [id, registrationData]);

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <form className="form-control m-5" onSubmit={handleSubmit}>
                    <h3>Enroll Course</h3>
                    <input type="text" name="userName" placeholder="User Name" value={user.name} /><br /><br />
                    <input type="text" name="courseName" placeholder="Course" value={course.course} /><br /><br />
                    <input type="text" name="description" placeholder="Description" value={course.description} /><br /><br />
                    <input type="text" name="fee" placeholder="fee" value={course.fee} /><br /><br />
                    <button className="btn btn-success">Register Now</button>
                </form>

            </div>
        </div>
    );
};

export default EnrollCourse;