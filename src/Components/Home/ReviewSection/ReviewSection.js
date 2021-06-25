import React, { useEffect, useState } from 'react';
import ShowReview from '../ShowReview/ShowReview';

const ReviewSection = () => {
    const[allReview, SetAllReview] = useState([]);
    useEffect(() => {
        fetch('https://stormy-falls-41851.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data=> SetAllReview(data))
    }, []);
    return (
        <section className="review-section d-flex align-items-center">
            <div className="container mt-3 mb-3">
                <h1 className="text-center mt-5 p-3 custom-review">Reviews of Our Members</h1>
                <div className="row">
                    {
                        allReview.map(review => <ShowReview review={review} key={review._id}></ShowReview>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;