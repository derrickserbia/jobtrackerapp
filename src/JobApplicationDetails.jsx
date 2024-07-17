import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "/jobapplications";

function JobApplicationDetails() {
    const { id } = useParams();
    const [jobApplication, setJobApplication] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(response => response.json())
            .then(data => setJobApplication(data))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <p>Loading job application...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : jobApplication ? (
                <div>
                    <h2>Job Application Details</h2>
                    <p>Job Title: {jobApplication.jobTitle}</p>
                    {/* ... display other details ... */}
                </div>
            ) : (
                <p>Job application not found.</p>
            )}
        </div>
    )
}

export default JobApplicationDetails;