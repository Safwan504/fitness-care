import React from 'react';

const RegistrationList = (props) => {
    const {userName, email, courseName} = props.courses;
    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{courseName}</td>
            <td><button>Pending</button></td>
        </tr>
    );
};

export default RegistrationList;