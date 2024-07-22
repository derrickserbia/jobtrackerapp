import { useNavigate, useParams } from "react-router-dom";
import { emptyJobApplication, JobApplication } from "../models/JobApplication";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { API_URL } from "../App";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import dayjs, { Dayjs } from "dayjs";

const headers = {
  "Content-type": "application/json",
};

function JobApplicationDetails() {
  const { jobApplicationId } = useParams();
  const [formIsEdited, setFormIsEdited] = useState(false);
  const [jobApplicationData, setJobApplicationData] =
    useState(emptyJobApplication);
  const [initialJobApplicationData, setInitialJobApplicationData] =
    useState(emptyJobApplication);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/${jobApplicationId}`)
      .then((response) => response.json())
      .then((data: JobApplication) => {
        setJobApplicationData(data);
        setInitialJobApplicationData(data);
        console.log(data);
      });
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetch(`${API_URL}/${jobApplicationData.id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(jobApplicationData),
    }).then(() => {
      navigate(`/jobapplications/${jobApplicationData.id}`);
    });
    console.log("handleSubmit");
    setFormIsEdited(false); //if successful
  };

  const handleCancel = () => {
    setJobApplicationData(initialJobApplicationData);
    console.log("handleCancel");
    setFormIsEdited(false);
  };

  const handleOnChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    let newValue: string | number | Dayjs | null = value;
    switch (name) {
      case "minSalary":
      case "maxSalary":
        newValue = value.trim() === "" ? null : parseFloat(value);
        break;
      case "dateApplied":
        newValue = dayjs(value);
        break;
      case "status":
        newValue = parseInt(value, 10);
        break;
      default:
        break;
    }
    setJobApplicationData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    setFormIsEdited(true);
  };

  return (
    <Container>
      <h3>Job Application Details</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formPostingUrl" className="mb-3">
              <Form.Label>Job posting URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL"
                value={jobApplicationData.postingUrl}
                name="postingUrl"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group controlId="formDateApplied" className="mb-3">
              <Form.Label>Date applied</Form.Label>
              <Form.Control
                type="date"
                value={dayjs(jobApplicationData.dateApplied)
                  .toISOString()
                  .slice(0, 10)}
                name="dateApplied"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formJobTitle" className="mb-3">
              <Form.Label>Job title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job title"
                value={jobApplicationData.jobTitle}
                name="jobTitle"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCompany" className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company"
                value={jobApplicationData.companyName}
                name="companyName"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formHiringTeam" className="mb-3">
              <Form.Label>Hiring team</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter hiring team"
                value={jobApplicationData.hiringTeam}
                name="hiringTeam"
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Form.Group controlId="formMinSalary" className="mb-3">
              <Form.Label>Minimum salary</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={jobApplicationData.minSalary}
                  name="minSalary"
                  onChange={handleOnChange}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group controlId="formMaxSalary" className="mb-3">
              <Form.Label>Maximum salary</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="number"
                  value={jobApplicationData.maxSalary}
                  name="maxSalary"
                  onChange={handleOnChange}
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formJobDescription" className="mb-3">
          <Form.Label>Job description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={jobApplicationData.jobDescription}
            name="jobDescription"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formNotes" className="mb-3">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={jobApplicationData.notes}
            name="notes"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formNotes" className="mb-3">
          {formIsEdited && (
            <>
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Save
              </Button>{" "}
              <Button variant="secondary" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          )}
        </Form.Group>
      </Form>
    </Container>
  );
}
export default JobApplicationDetails;
