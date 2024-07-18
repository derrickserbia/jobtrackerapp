import { useState, useEffect } from "react";
import { JobApplicationStatus } from "./JobApplicationStatus";
import "./App.css"

function JobApplicationForm({ onCreate }) {
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
    };
    const [formData, setFormData] = useState(emptyForm);

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

    const handleCancel = () => {
        setFormData(emptyForm);
    };

    return (
        <>
            <h2>New Job Application</h2>
            <form>
                <div className="form-input">
                    <div>
                        <label htmlFor="jobTitle">Job title: </label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleFormChange}
                            required
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
                            required
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="status">Application status: </label>
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
                        <label htmlFor="dateApplied">Date applied: </label>
                        <input
                            type="date"
                            name="dateApplied"
                            value={formData.dateApplied}
                            onChange={handleFormChange}
                        />
                    </div>
                    <br />
                    <label htmlFor="minSalary">Salary range: </label>
                    <div style={{width: "100%"}}>
                        <input
                            type="number"
                            inputMode="number"
                            name="minSalary"
                            value={formData.minSalary}
                            onChange={handleFormChange}
                        /> -
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
                        <label htmlFor="jobDescription">Job description: </label>
                        <textarea
                            name="jobDescription"
                            value={formData.jobDescription}
                            onChange={handleFormChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="notes">Notes: </label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleFormChange}
                        />
                    </div>
                    <br />
                </div>
                <div style={{textAlign: "center"}}>
                    <button className="button-submit" type="submit" onClick={() => onCreate(formData)}>Create</button>
                    <button className="button-cancel" type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </>
    );
};

export default JobApplicationForm;