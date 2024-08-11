import { JobApplication } from "../models/JobApplication";
import JobApplicationForm from "../components/JobApplicationForm";

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
  const handleCreate = (jobApplication: JobApplication) => {
    console.log(jobApplication);
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
