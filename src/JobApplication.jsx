import { useState, useEffect } from "react";

const ApplicationStatus = {
    Pending: 0,
    InterviewScheduled: 1,
    RejectedByEmployer: 2,
    RejectedByMe: 3,
    OfferReceived: 4
}

function JobApplication({ onCreate }) {
    const today = new Date().toISOString().slice(0, 10);
    const emptyForm = {
        jobTitle: "",
        companyName: "",
        status: ApplicationStatus.Pending,
        dateApplied: today,
        jobDescription: "",
        notes: "",
        minSalary: "",
        maxSalary: "",
    };
    const [formData, setFormData] = useState(emptyForm);

    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        setFormData(prevData => ({ ...prevData, dateApplied: today }))
    }, []);

    const handleFormChange = (event) => {
        const { name, value } = event.target;

        let parsedValue = value;
        if (name === "minSalary" || name === "maxSalary") {
          parsedValue = value.trim() === "" ? "" : parseFloat(value); // Parse to float
          if (isNaN(parsedValue)) { // Check for NaN
            setError("Please enter a valid number for salary.");
            return; 
          }
        }

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
            <form onSubmit={() => onCreate(formData)}>
                <div>
                    <input
                        type="text"
                        name="jobTitle"
                        placeholder="Enter job title"
                        value={formData.jobTitle}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <div>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleFormChange}
                    >
                        <option value={ApplicationStatus.Pending}>Pending</option>
                        <option value={ApplicationStatus.InterviewScheduled}>Interview Scheduled</option>
                        <option value={ApplicationStatus.RejectedByEmployer}>Rejected by Employer</option>
                        <option value={ApplicationStatus.RejectedByMe}>Rejected by Me</option>
                        <option value={ApplicationStatus.OfferReceived}>Offer Received</option>
                    </select>
                </div>
                <div>
                    <input
                        type="date"
                        name="dateApplied"
                        value={formData.dateApplied}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <textarea
                        name="jobDescription"
                        placeholder="Enter job description"
                        value={formData.jobDescription}
                        onChange={handleFormChange}
                    ></textarea>
                </div>
                <div>
                    <textarea
                        name="notes"
                        placeholder="Enter your notes"
                        value={formData.notes}
                        onChange={handleFormChange}
                    ></textarea>
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Enter minimum salary"
                        name="minSalary"
                        value={formData.minSalary}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Enter maximum salary"
                        name="maxSalary"
                        value={formData.maxSalary}
                        onChange={handleFormChange}
                    />
                </div>
                <button type="submit">Create</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default JobApplication;