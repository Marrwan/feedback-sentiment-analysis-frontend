export interface FeedbackResponse {
    sentiment: string;
    summary: string;
}

export interface FeedbackFormProps {
    onSubmit: (feedback: string) => void;
}

export interface ResultDisplayProps {
    sentiment: string;
    summary: string;
}
