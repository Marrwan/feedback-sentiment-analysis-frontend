import { ResultDisplayProps } from '../types';
import styles from '../styles/result.module.css';
import React from "react";

const ResultDisplay: React.FC<ResultDisplayProps> = ({ sentiment, summary }) => {
    return (
        <div className={styles.resultContainer}>
            <h1>Feedback Analysis</h1>
            <p><strong>Sentiment:</strong> {sentiment}</p>
            <p><strong>Summary:</strong> {summary}</p>
            <button onClick={() => window.location.reload()}>Analyze Another Feedback</button>
        </div>
    );
};

export default ResultDisplay;
