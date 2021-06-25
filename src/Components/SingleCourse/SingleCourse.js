import React from 'react';

const SingleCourse = ({ course }) => {
    const { courseName, courseDescription, courseFee } = course;
    return (
        <div className="col-md-6">
            <div className="m-2 shadow p-3">
                <h4>{courseName}</h4>
                <p>{courseDescription}</p>
                <h3>{courseFee}</h3>
            </div>
        </div>
    );
};

export default SingleCourse;