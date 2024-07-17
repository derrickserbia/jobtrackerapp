import { useEffect, useState } from "react";
import { getApplicationStatusText } from "./JobApplicationStatus";

const term = "Job Application"

function JobApplicationList({ data, onDelete }) {
    const [sortedData, setSortedData] = useState(data); // State for sorted data
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });  

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

    return (
        <div>
            <h2>{term}s</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{cursor:'pointer'}} onClick={() => requestSort('id')}>Job ID</th>
                        <th style={{cursor:'pointer'}} onClick={() => requestSort('jobTitle')}>Job Title</th>
                        <th style={{cursor:'pointer'}} onClick={() => requestSort('companyName')}>Company Name</th>
                        <th style={{cursor:'pointer'}} onClick={() => requestSort('minSalary')}>Minimum Salary</th>
                        <th style={{cursor:'pointer'}} onClick={() => requestSort('maxSalary')}>Maximum Salary</th>
                        <th style={{cursor:'pointer'}} onClick={() => requestSort('status')}>Application Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((job) => (
                        <tr key={job.id}>
                            <td>{job.id}</td>
                            <td><a href={"/jobapplications/" + job.id}>{job.jobTitle}</a></td>
                            <td>{job.companyName}</td>
                            <td>{job.minSalary}</td>
                            <td>{job.maxSalary}</td>
                            <td>{getApplicationStatusText(job.status)}</td>
                            <td>
                                <button type="button" onClick={() => onDelete(job.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default JobApplicationList;