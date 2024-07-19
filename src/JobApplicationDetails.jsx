import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { JobApplicationStatus } from './JobApplicationStatus';

const API_URL = "/jobapplications";
const headers = { "Content-Type": "application/json" };

function JobApplicationDetails({ onUpdate }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(response => response.json())
            .then(data => setFormData(data))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }, [id]);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        var parsedValue = value;
        
        if (name === "minSalary" || name === "maxSalary") {
            parsedValue = value.trim() === "" ? null : parseFloat(value);
        } else if (name === "dateApplied ") {
            parsedValue = dayjs(value).format("YYYY-MM-DD");
        } else if (name === "status") {
            parsedValue = parseInt(value);
        }
        setFormData((prevData) => ({ ...prevData, [name]: parsedValue }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers,
            body: JSON.stringify(formData)
        })
            .then(() => {
                onUpdate(formData);
                navigate("/jobapplications");
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }

    const handleBackButton = () => {
        navigate("/jobapplications")
    }

    return (
        <div>
            {isLoading ? (
                <p>Loading job application...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : formData ? (
                <div>
                    <button type="button" onClick={handleBackButton}>Back to List</button>
                    <h2>Job Application Details</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <form>
                            <div>
                                <label htmlFor="jobTitle">Job title: </label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="companyName">Company name: </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="dateApplied">Date applied: </label>
                                <input
                                    name="dateApplied"
                                    type="date"
                                    value={dayjs(formData.dateApplied).format("YYYY-MM-DD")}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="minSalary">Minimum salary: </label>
                                <input
                                    type="number"
                                    name="minSalary"
                                    value={formData.minSalary}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="maxSalary">Maximum salary: </label>
                                <input
                                    type="number"
                                    name="maxSalary"
                                    value={formData.maxSalary}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="status">Application status: </label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleFormChange}
                                >
                                    <option value={JobApplicationStatus.Pending}>Pending</option>
                                    <option value={JobApplicationStatus.InterviewScheduled}>Interview Scheduled</option>
                                    <option value={JobApplicationStatus.RejectedByEmployer}>Rejected by Employer</option>
                                    <option value={JobApplicationStatus.RejectedByMe}>Rejected by Me</option>
                                    <option value={JobApplicationStatus.OfferReceived}>Offer Received</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="postingUrl">Posting URL: </label>
                                <input
                                    type="text"
                                    name="postingUrl"
                                    value={formData.postingUrl}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="hiringTeam">Hiring team: </label>
                                <input
                                    type="text"
                                    name="hiringTeam"
                                    value={formData.hiringTeam}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="techStack">Tech stack: </label>
                                <input
                                    type="text"
                                    name="techStack"
                                    value={formData.techStack}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="jobDescription">Job description: </label>
                                <textarea
                                    name="jobDescription"
                                    value={formData.jobDescription}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="Notes">Notes: </label>
                                <textarea
                                    name="Notes"
                                    value={formData.notes}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <br />
                            <button type="submit" onClick={handleSubmit}>Save</button>
                        </form>
                    </div>
                </div>
            ) : (
                <p>Job application not found.</p>
            )}
        </div>
    )
}

export default JobApplicationDetails;