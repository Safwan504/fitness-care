import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddReview = () => {
    const [review, setReview] = useState({});
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://stormy-falls-41851.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                alert('Review added Successfully')
                history.replace("/");
            })
    }
    const handleOnBlur = (e) => {
        const newReview = review;
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    return (
        <div className="text-center pb-5">
            <h3 className="mt-5 text-center text-light">Write a Review</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onBlur={handleOnBlur} name="userName" placeholder="Your Name"  /><br /><br />
                <textarea name="review" onBlur={handleOnBlur} cols="30" rows="10" placeholder="Your review"></textarea><br />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default AddReview;