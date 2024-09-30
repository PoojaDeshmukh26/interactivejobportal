import React, { useState } from 'react';

const CompanyReview = () => {
    const [reviews, setReviews] = useState([
        { id: 1, text: 'Great company culture!' },
        { id: 2, text: 'Supportive management.' },
        { id: 3, text: 'Opportunities for growth.' },
    ]);

    const [newReview, setNewReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.trim()) {
            setReviews([...reviews, { id: reviews.length + 1, text: newReview }]);
            setNewReview('');
        }
    };

    return (
        <div>
            <h2>Company Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>{review.text}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write a review..."
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CompanyReview;
