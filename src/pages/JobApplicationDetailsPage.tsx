import { useParams } from "react-router-dom";
import { JobApplication } from "../models/JobApplication";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { JobApplicationDetailsDTO } from "../models/JobApplicationDetailsDTO";

function JobApplicationDetailsPage() {
  const { id } = useParams();
  const [jobApplicationData, setJobApplicationData] =
    useState<JobApplication>();

  const mapJobApplicationDetails = (
    jobApplicationFromApi: JobApplicationDetailsDTO
  ): JobApplication => {
    const output: JobApplication = {
      id: jobApplicationFromApi.id,
      jobTitle: jobApplicationFromApi.jobTitle,
      companyName: jobApplicationFromApi.companyName,
      hiringTeam: jobApplicationFromApi.hiringTeam,
      applicationStatus: jobApplicationFromApi.jobApplicationStatusId,
      dateAppliedString: jobApplicationFromApi.appliedDate
        .toISOString()
        .slice(0, 10),
      minSalary: jobApplicationFromApi.minSalary,
      maxSalary: jobApplicationFromApi.maxSalary,
      jobDescription: jobApplicationFromApi.jobDescription,
      notes: jobApplicationFromApi.notes,
      postingUrl: jobApplicationFromApi.jobPostingUrl,
    };
    return output;
  };

  useEffect(() => {
    const getApplicationById = async (id: string | undefined) => {
      try {
        let response = await fetch(`/api/jobapplications/${id}`);
        let data: any = await response.json();
        console.log(data);
        let jobApplication: JobApplication = mapJobApplicationDetails(data);
        setJobApplicationData(jobApplication);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    getApplicationById(id);
  }, []);

  return (
    <>
      <h1>JobApplicationDetailsPage {id}</h1>
      <h2>{jobApplicationData?.jobTitle}</h2>
      <Button href="/jobapplications/edit">Edit</Button>
    </>
  );
}

export default JobApplicationDetailsPage;
