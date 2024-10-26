"use client";

import { useState } from 'react';
import { FeedbackResponse } from "@/app/types";
import FeedbackForm from "@/app/components/FeedBackForm";
import ResultDisplay from "@/app/components/ResultsDisplay";
import axios from "@/app/utils/axiosInstance";

const Page: React.FC = () => {
    const [feedbackData, setFeedbackData] = useState<FeedbackResponse | null>(null);

    const handleFeedbackSubmit = async (feedback: string) => {
        try {
            console.log({feedback})
            const response = await axios.post('/feedback-analyze', {
                feedback,
            });
            const data: FeedbackResponse = response.data; // Adjusted to get data directly from Axios response
            setFeedbackData(data);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div className="app-content">
            {!feedbackData ? (
                <FeedbackForm onSubmit={handleFeedbackSubmit} />
            ) : (
                <ResultDisplay
                    sentiment={feedbackData.sentiment}
                    summary={feedbackData.summary}
                />
            )}
        </div>
    );
};

export default Page;
