import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: 'Feedback Sentiment Analysis',
    description: 'Analyze user feedback sentiment with OpenAI!',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
        <body>
        <div className="app-container">
            {children}
        </div>
        </body>
        </html>
    );
};

export default RootLayout;
