import { useLoaderData } from "react-router-dom";
import { API_URL } from "../App";
import { JobApplication, JobApplicationLoader } from "../models/JobApplication";
import JobApplicationDetails from "../components/JobApplicationDetails";
import { Accordion, Button, Card, CardGroup } from "react-bootstrap";
import { useEffect, useState } from "react";

function JobApplicationDetailsPage() {
  const [showMoreJobDescription, setShowMoreJobDescription] = useState(false);
  const jobApplication: JobApplication = useLoaderData() as JobApplication;
  const [jobApplicationDescription, setJobApplicationDescription] =
    useState("");

  useEffect(() => {
    setJobApplicationDescription(
      jobApplication.jobDescription.slice(0, 100) + "..."
    );
  }, []);

  const handleShowMoreDescription = () => {
    setShowMoreJobDescription((prevState) => !prevState);
    setJobApplicationDescription(
      !showMoreJobDescription
        ? jobApplication.jobDescription
        : jobApplication.jobDescription.slice(0, 100) + "..."
    );
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{jobApplication.jobTitle}</Card.Title>
        <Card.Subtitle>
          {jobApplication.companyName} - {jobApplication.hiringTeam}
        </Card.Subtitle>
        <br></br>
        <Card.Text as="div">
          {/* Conditionally render paragraphs based on showMoreJobDescription */}
          {showMoreJobDescription
            ? jobApplication?.jobDescription
                ?.split("\n")
                .map((line, index) => <p key={index}>{line}</p>)
            : jobApplication?.jobDescription
                ?.split("\n")
                .slice(0, 5)
                .map((line, index) => <p key={index}>{line}</p>)}

          {/* Buttons are rendered only if showMoreJobDescription is false */}
          {!showMoreJobDescription && (
            <Card.Link as="button" onClick={handleShowMoreDescription}>
              Show more
            </Card.Link>
          )}

          {/* Buttons are rendered only if showMoreJobDescription is true  */}
          {showMoreJobDescription &&
            jobApplication?.jobDescription?.split("\n").length > 1 && (
              <Card.Link as="button" onClick={handleShowMoreDescription}>
                Show less
              </Card.Link>
            )}
        </Card.Text>
        {jobApplication.postingUrl && (
          <Card.Link href={jobApplication.postingUrl}>Posting URL</Card.Link>
        )}
      </Card.Body>
      <Button href={`/edit-jobapplication/${jobApplication.id}`}>Edit</Button>
    </Card>
  );
}

const jobApplicationLoader: JobApplicationLoader = async (args) => {
  const response = await fetch(`${API_URL}/${args.params.id}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export { JobApplicationDetailsPage as default, jobApplicationLoader };
