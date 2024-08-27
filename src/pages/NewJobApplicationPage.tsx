import { JobApplication } from "../models/JobApplication";
import JobApplicationForm from "../components/JobApplicationForm";
import { useState } from "react";

const emptyJobApplication: JobApplication = {
  id: 0,
  applicationStatus: 0,
  dateAppliedString: new Date().toISOString().slice(0, 10),
  postingUrl: "",
  jobTitle: "",
  companyName: "",
  hiringTeam: "",
  minSalary: 0,
  maxSalary: 0,
  jobDescription: "",
  notes: "",
  techStack: [],
};

function NewJobApplicationPage() {
  const handleCreate = async (jobApplication: JobApplication) => {
    try {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      let response = await fetch("/api/jobapplications", {
        method: "POST",
        body: JSON.stringify(jobApplication),
        headers: headers,
      });
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);

      return await response.json();
    } catch (error) {
      console.error("Error creating job application:", error);
      throw error;
    }
  };

  return (
    <JobApplicationForm
      formType="New"
      onSubmit={handleCreate}
      initialFormData={emptyJobApplication}
    />
  );
}
export default NewJobApplicationPage;
