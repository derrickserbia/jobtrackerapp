import { useLoaderData } from "react-router-dom";
import { API_URL } from "../App";
import { JobApplication } from "../models/JobApplication";
import JobApplicationDetails from "../components/JobApplicationDetails";
import { Card, CardGroup } from "react-bootstrap";

function JobApplicationDetailsPage() {
  const jobApplication: JobApplication = useLoaderData() as JobApplication;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{jobApplication.jobTitle}</Card.Title>
        <Card.Subtitle>
          {jobApplication.companyName} - {jobApplication.hiringTeam}
        </Card.Subtitle>
        <br></br>
        <Card.Text>{jobApplication.jobDescription.slice(0, 500)}</Card.Text>
        {jobApplication.postingUrl && (
          <Card.Link href={jobApplication.postingUrl}>Posting URL</Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

const jobApplicationLoader = async ({ params }) => {
  const response = await fetch(`${API_URL}/${params.id}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export { JobApplicationDetailsPage as default, jobApplicationLoader };
