import { useState, useEffect } from "react";
import dayjs from "dayjs";


export const ApplicationStatus = {
    Pending: 0,
    InterviewScheduled: 1,
    RejectedByEmployer: 2,
    RejectedByMe: 3,
    OfferReceived: 4
}

function JobApplicationForm({ onCreate }) {
    const today = dayjs();
    const emptyForm = {
        jobTitle: "",
        companyName: "",
        status: ApplicationStatus.Pending,
        dateApplied: today,
        jobDescription: "",
        notes: "",
        minSalary: 0,
        maxSalary: 0,
    };
    const [formData, setFormData] = useState(emptyForm);

    useEffect(() => {
        const today = dayjs();
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
                <input
                    type="text"
                    name="jobTitle"
                    placeholder="Enter job title"
                    value={formData.jobTitle}
                    onChange={handleFormChange}
                    required
                />
                <input
                    type="text"
                    name="companyName"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={handleFormChange}
                    required
                />
                <select
                    name="status"
                    defaultValue={ApplicationStatus.Pending}
                    helperText="Job application status"
                    onChange={handleFormChange}
                >
                    <option value={ApplicationStatus.Pending}>Pending</option>
                    <option value={ApplicationStatus.InterviewScheduled}>Interview Scheduled</option>
                    <option value={ApplicationStatus.RejectedByEmployer}>Rejected by Employer</option>
                    <option value={ApplicationStatus.RejectedByMe}>Rejected by Me</option>
                    <option value={ApplicationStatus.OfferReceived}>Offer Received</option>
                </select>
                <input
                    type="date"
                    name="dateApplied"
                    value={formData.dateApplied}
                    onChange={(newValue) => { formData.dateApplied = newValue }}
                />
                <input
                    type="number"
                    inputMode="number"
                    placeholder="Enter minimum salary"
                    name="minSalary"
                    value={formData.minSalary}
                    onChange={handleFormChange}
                />
                <input
                    type="number"
                    inputMode="number"
                    placeholder="Enter maximum salary"
                    name="maxSalary"
                    value={formData.maxSalary}
                    onChange={handleFormChange}
                />
                <input
                    name="jobDescription"
                    placeholder="Enter job description"
                    value={formData.jobDescription}
                    onChange={handleFormChange}
                />
                <input
                    name="notes"
                    placeholder="Enter your notes"
                    value={formData.notes}
                    onChange={handleFormChange}
                />
                <button type="submit" onClick={() => onCreate(formData)}>Create</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </>
    );
};

export default JobApplicationForm;