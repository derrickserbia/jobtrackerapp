import { JobApplicationStatus } from "./JobApplicationStatus";

const term = "Job Application"

function JobApplicationList({ data, onUpdate, onDelete }) {


    return (
        <div>
            <h2>{term}s</h2>
            <table>
                <thead>
                    <tr>
                        <th>Job ID</th>
                        <th>Job Title</th>
                        <th>Company Name</th>
                        <th>Salary Range</th>
                        <th>Application Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((job) => (
                        <tr key={job.id}>
                            <td>{job.id}</td>
                            <td><a href={"/jobapplications/" + job.id}>{job.jobTitle}</a></td>
                            <td>{job.companyName}</td>
                            <td>{job.minSalary} - {job.maxSalary}</td>
                            {/* <td>{getApplicationStatusText(job.status)}</td> */}
                            <td>
                                <select
                                    name="status"
                                    defaultValue={job.status}
                                    // onChange={handle}
                                >
                                    <option value={JobApplicationStatus.Pending}>Pending</option>
                                    <option value={JobApplicationStatus.InterviewScheduled}>Interview Scheduled</option>
                                    <option value={JobApplicationStatus.RejectedByEmployer}>Rejected by Employer</option>
                                    <option value={JobApplicationStatus.RejectedByMe}>Rejected by Me</option>
                                    <option value={JobApplicationStatus.OfferReceived}>Offer Received</option>
                                </select>
                            </td>
                            <td>
                            <button type="button" onClick={() => onUpdate(job.id)}>Save</button>
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