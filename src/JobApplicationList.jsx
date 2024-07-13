const term = "Job Application"

function JobApplicationList({ data, onDelete }) {
    return (
        <div>
            <h2>{term}s</h2>
            <ul>
                {data.map((job) => (
                    <li key={job.id}>
                        <div>{job.jobTitle} - {job.companyName} <button type="button" onClick={() => onDelete(job.id)}>Delete</button></div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default JobApplicationList;