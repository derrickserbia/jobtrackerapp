import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import JobApplicationList from "./JobApplicationList";
import JobApplicationForm from './JobApplicationForm';
import JobApplicationDetails from './JobApplicationDetails';

const API_URL = "/jobapplications";
const headers = { 'Content-type': 'application/json' }

function App() {
    const [jobApplicationData, setJobApplicationData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobApplicationData = () => {
            fetch(API_URL)
                .then(response => response.json())
                .then(data => setJobApplicationData(data))
                .catch(error => setError(error))
                .finally(setIsLoading(false));
        };

        fetchJobApplicationData();
    }, []);

    const handleCreate = (newItem) => {
        console.log(`newItem: ${JSON.stringify(newItem)}`)

        newItem.minSalary = newItem.minSalary.trim === "" ? null : parseFloat(newItem.minSalary);
        newItem.maxSalary = newItem.maxSalary.trim === "" ? null : parseFloat(newItem.maxSalary);

        fetch(API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(newItem)
        })
            .then(response => response.json())
            .then(returnedItem => setJobApplicationData([...jobApplicationData, returnedItem]))
            .catch(error => setError(error))
    };

    const handleDelete = (id) => {
        fetch(`${API_URL}/${id}`, { method: "DELETE", headers })
            .then(() => setJobApplicationData(jobApplicationData.filter(job => job.id !== id)))
            .catch(error => {
                console.error * ('Error deleting item:', error);
                setError(error.message);
            });
    }

    const handleUpdate = (updatedItem) => {
        setJobApplicationData(
          jobApplicationData.map((job) =>
            job.id === updatedItem.id ? updatedItem : job
          )
        );
      };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                        <div>
                            <JobApplicationForm onCreate={handleCreate} />
                            {isLoading ? (
                                <p>Loading job applications...</p>
                            ) : error ? (
                                <p>Error: {error}</p>
                            ) : (
                                <JobApplicationList
                                    data={jobApplicationData}
                                    onDelete={handleDelete}
                                />
                            )}
                        </div>
                }/>
                <Route path="/jobapplications/:id" element={<JobApplicationDetails onUpdate={handleUpdate}/>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>

    )
};

export default App;