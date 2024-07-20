import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { JobApplicationStatus } from "../../Utils/JobApplicationStatus";

const API_URL = "/jobapplications";
const headers = { 'Content-type': 'application/json' }

function JobApplicationForm({ onCreate }) {
    const navigate = useNavigate();
    const today = new Date().toLocaleDateString("en-CA");
    const emptyForm = {
        jobTitle: "",
        companyName: "",
        status: JobApplicationStatus.Pending,
        dateApplied: today,
        jobDescription: "",
        notes: "",
        minSalary: 0,
        maxSalary: 0,
        postingUrl: "",
        hiringTeam: "",
        techStack: []
    };
    const [formData, setFormData] = useState(emptyForm);
    const [error, setError] = useState(null);

    useEffect(() => {
        const today = new Date().toLocaleDateString("en-CA");
        setFormData(prevData => ({ ...prevData, dateApplied: today }))
    }, []);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (newItem) => {
        console.log(`newItem: ${JSON.stringify(newItem)}`)

        newItem.minSalary = newItem.minSalary.trim === "" ? null : parseFloat(newItem.minSalary);
        newItem.maxSalary = newItem.maxSalary.trim === "" ? null : parseFloat(newItem.maxSalary);

        fetch(API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(newItem)
        })
            .then(response => response.json())
            .then(returnedItem => {
                onCreate(returnedItem)
                navigate("/", {replace: true});
                setFormData(emptyForm)
            })
            .catch(error => setError(error))
    };

    const handlePostingUrlChange = (event) => {
        const { name, value } = event.target;
            
        fetch(`${API_URL}/extract?postingUrl=${value}`)
            .then(response => response.json())
            .then(data => console.log(`from api: ${data}`)) //TODO: replace with setFormData(data)
            .catch(error => setError(error))
        
            setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCancel = () => {
        setFormData(emptyForm);
    };

    return (
        <div>
            <h2>New Job Application</h2>
            <form>
                <br />
                <div>
                <div>
                        <label htmlFor="postingUrl">Posting URL:</label>
                        <input
                            type="text"
                            name="postingUrl"
                            value={formData.postingUrl}
                            onChange={handlePostingUrlChange}
                            required
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="jobTitle">Job title:</label>
                        <input
                            autoComplete="on"
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="companyName">Company name:</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="status">Application status:</label>
                        <select
                            name="status"
                            defaultValue={JobApplicationStatus.Pending}
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
                        <label htmlFor="dateApplied">Date applied:</label>
                        <input
                            type="date"
                            name="dateApplied"
                            value={formData.dateApplied}
                            onChange={handleFormChange}
                        />
                    </div>
                    <br />
                    <label htmlFor="minSalary">Salary range:</label>
                    <div>
                        <input
                            type="number"
                            inputMode="number"
                            name="minSalary"
                            value={formData.minSalary}
                            onChange={handleFormChange}
                        /> 
                        <div> - </div>
                        <input
                            type="number"
                            inputMode="number"
                            name="maxSalary"
                            value={formData.maxSalary}
                            onChange={handleFormChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="hiringTeam">Hiring team:</label>
                        <input
                            autoComplete="on"
                            type="text"
                            name="hiringTeam"
                            value={formData.hiringTeam}
                            onChange={handleFormChange}
                        />
                    </div>
                    <br />
                    {/* <div>
                        <label htmlFor="techStack">Tech stack:</label>
                        <input
                            autoComplete="on"
                            type="text"
                            name="techStack"
                            value={formData.techStack}
                            onChange={handleFormChange}
                        />
                    </div>
                    <br /> */}
                </div>
                <div>
                    <div>
                        <label htmlFor="jobDescription">Job description:</label>
                        <textarea
                            name="jobDescription"
                            value={formData.jobDescription}
                            onChange={handleFormChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="notes">Notes:</label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleFormChange}
                        />
                    </div>
                    <br />
                </div>
                <div>
                    <button className="button-submit" type="submit" onClick={() => handleSubmit(formData)}>Create</button>
                    <button className="button-cancel" type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default JobApplicationForm;