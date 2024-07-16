import { getApplicationStatusText } from "./JobApplicationStatus";

const term = "Job Application"

function JobApplicationList({ data, onDelete }) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'jobTitle', headerName: 'Job title', width: 260 },
        { field: 'companyName', headerName: 'Company', width: 260 },
        { field: 'statusText', headerName: 'Application status', width: 260 },
        { 
            field: 'dateApplied', 
            headerName: 'Date applied', 
            width: 260,
        },
    ];

    const formattedData = Array.isArray(data) ? data.map(job => ({
        ...job,
        statusText: getApplicationStatusText(job.status),
    })) : [];

    return (
        <div>
        <h2>{term}s</h2>
        <ol>
            {data.map((job) => (
                <li key={job.id}>
                    <div>{job.jobTitle} - {job.companyName} <button type="button" onClick={() => onDelete(job.id)}>Delete</button></div>
                </li>
            ))}
        </ol>
    </div>
    )
}

export default JobApplicationList;