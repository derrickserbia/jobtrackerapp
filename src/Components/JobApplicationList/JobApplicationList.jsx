import { useEffect, useState } from "react";
import { getApplicationStatusText } from "../../Utils/JobApplicationStatus.jsx";
import { Link, useNavigate } from "react-router-dom";

const term = "Job Application"

function JobApplicationList({ data, onDelete }) {
    const navigate = useNavigate();
    const [sortedData, setSortedData] = useState(data); // State for sorted data
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

    const totalJobApplications = sortedData.length;

    useEffect(() => {
        const sorted = [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        setSortedData(sorted);
    }, [data, sortConfig]);

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handleBackButton = () => {
        navigate("/")
    }

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency", currency: "USD"});

    return (
        <div>
            <button type="button" onClick={handleBackButton}>Back to Home</button>
            <h2>{term}s ({totalJobApplications})</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{ cursor: 'pointer' }} onClick={() => requestSort('id')}>Job ID</th>
                        <th style={{ cursor: 'pointer' }} onClick={() => requestSort('jobTitle')}>Job Title</th>
                        <th style={{ cursor: 'pointer' }} onClick={() => requestSort('companyName')}>Company Name</th>
                        <th style={{ cursor: 'pointer' }} onClick={() => requestSort('minSalary')}>Minimum Salary</th>
                        <th style={{ cursor: 'pointer' }} onClick={() => requestSort('maxSalary')}>Maximum Salary</th>
                        <th style={{ cursor: 'pointer' }} onClick={() => requestSort('status')}>Application Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((job) => (
                        <tr key={job.id}>
                            <td>{job.id}</td>
                            <td><Link to={`/jobapplications/${job.id}`}>{job.jobTitle}</Link></td>
                            <td>{job.companyName}</td>
                            <td>{formatter.format(job.minSalary)}</td>
                            <td>{formatter.format(job.maxSalary)}</td>
                            <td>{getApplicationStatusText(job.status)}</td>
                            <td><button type="button" onClick={() => onDelete(job.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default JobApplicationList;