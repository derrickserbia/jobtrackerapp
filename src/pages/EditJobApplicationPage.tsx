import React, { useEffect } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { JobApplication } from "../models/JobApplication";
import { useNavigate, useLoaderData } from "react-router-dom";

function EditJobApplicationPage() {
  const navigate = useNavigate();
  const formData: JobApplication = useLoaderData() as JobApplication;

  useEffect(() => {
    console.log("EditPage");
  }, []);

  const handleSubmit = (
    form: JobApplication,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    console.log(form, event);
  };
  const handleOnChange = () => {};
  const handleBack = () => {
    navigate(`/jobapplications/${formData.id}`);
  };

  return (
    <>
      <h3>New Job Application</h3>
      <Form onSubmit={(event) => handleSubmit(formData, event)}>
        <Row>
          <Col>
            <Form.Group controlId="formPostingUrl" className="mb-3">
              <Form.Label>Job posting URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL"
                value={formData.postingUrl}
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
                value={formData.dateApplied.toString().slice(0, 10)}
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
                value={formData.jobTitle}
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
                value={formData.companyName}
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
                value={formData.hiringTeam}
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
                  value={formData.minSalary}
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
                  value={formData.maxSalary}
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
            value={formData.jobDescription}
            name="jobDescription"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formNotes" className="mb-3">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={formData.notes}
            name="notes"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formNotes" className="mb-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <Button variant="secondary" type="button" onClick={handleBack}>
            Back
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default EditJobApplicationPage;
