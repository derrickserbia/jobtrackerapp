import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import JobApplicationList from "./Components/JobApplicationList/JobApplicationList";
import JobApplicationForm from './Components/JobApplicationForm/JobApplicationForm';
import JobApplicationDetails from './Components/JobApplicationDetails/JobApplicationDetails';
import './App.css'

const API_URL = "/jobapplications";
const headers = { 'Content-type': 'application/json' }

function App() {
    const [jobApplicationData, setJobApplicationData] = useState([]);

    useEffect(() => {
        const fetchJobApplicationData = () => {
            fetch(API_URL)
                .then(response => response.json())
                .then(data => setJobApplicationData(data))
                .catch(error => setError(error))
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
    };

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
                        <Link to="/jobapplications">Job application list ({jobApplicationData.length})</Link>
                        <JobApplicationForm onCreate={handleCreate} />
                    </div>
                } />
                <Route path="/jobapplications" element={<JobApplicationList data={jobApplicationData} onDelete={handleDelete} />} />
                <Route path="/jobapplications/:id" element={<JobApplicationDetails onUpdate={handleUpdate} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>

    )
};

export default App;