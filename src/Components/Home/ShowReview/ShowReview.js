import React from 'react';

const ShowReview = (props) => {
    const {userName, review} = props.review;
    return (
        <div className="col-md-6">
            <h3>{userName}</h3>
            <p>{review}</p>
        </div>
    );
};

export default ShowReview;