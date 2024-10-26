import React, { useState } from 'react';
import { FeedbackFormProps } from '../types';
import styles from '../styles/form.module.css';

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
    const [feedback, setFeedback] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(feedback);
    };

    return (
        <form className={styles.feedbackForm} onSubmit={handleSubmit}>
            <h1>Share Your Thoughts</h1>
            <textarea
                placeholder="Type your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
            />
            <button type="submit">Analyze Feedback</button>
        </form>
    );
};

export default FeedbackForm;
