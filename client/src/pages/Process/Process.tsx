import { useParams } from 'react-router-dom';
import './Process.scss';

export const Process = () => {
    const { id } = useParams();

    // In a real app, you would fetch the process details based on the id
    return (
        <div className="process-page">
            <h1>Process Details</h1>
            <p>Process ID: {id}</p>
            <div className="status-card">
                <h2>Status</h2>
                <p>In Progress</p>
            </div>
        </div>
    );
};
