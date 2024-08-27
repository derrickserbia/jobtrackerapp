import { useParams } from "react-router-dom";
import { JobApplication } from "../models/JobApplication";
import { useEffect, useState } from "react";

function JobApplicationDetailsPage() {
  const { id } = useParams();
  const [jobApplicationData, setJobApplicationData] =
    useState<JobApplication>();

  const mapJobApplicationDetails = (
    jobApplicationFromApi: any
  ): JobApplication => {
    const output: JobApplication = {
      id: jobApplicationFromApi.id,
      jobTitle: jobApplicationFromApi.jobTitle,
      companyName: jobApplicationFromApi.companyName,
      hiringTeam: jobApplicationFromApi.hiringTeam,
      applicationStatus: jobApplicationFromApi.status,
      dateAppliedString: jobApplicationFromApi.dateApplied.slice(0, 10),
      minSalary: jobApplicationFromApi.minSalary,
      maxSalary: jobApplicationFromApi.maxSalary,
      jobDescription: jobApplicationFromApi.jobDescription,
      notes: jobApplicationFromApi.notes,
      postingUrl: jobApplicationFromApi.postingUrl,
      techStack: jobApplicationFromApi.techStack,
    };
    return output;
  };

  useEffect(() => {
    const getApplicationById = async (id: string | undefined) => {
      try {
        let response = await fetch(`/jobapplications/${id}`);
        let data: JobApplication = mapJobApplicationDetails(
          await response.json()
        );
        console.log(data);
        setJobApplicationData(data);
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
    </>
  );
}

export default JobApplicationDetailsPage;
