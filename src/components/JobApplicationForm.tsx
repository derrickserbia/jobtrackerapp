import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { JobApplication } from "../models/JobApplication";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  InputGroup,
  Row,
} from "react-bootstrap";

function JobApplicationForm({
  formType,
  onSubmit,
  initialFormData,
}: {
  formType: string;
  onSubmit: (formData: JobApplication) => void;
  initialFormData: JobApplication;
}) {
  const [jobApplicationFormData, setJobApplicationFormData] =
    useState<JobApplication>(initialFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    let newValue: string | number | Date | null = value;
    switch (name) {
      case "dateAppliedString":
        newValue = new Date(newValue).toISOString().slice(0, 10);
        break;
      default:
        break;
    }

    setJobApplicationFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleBackspaceOnDate = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Backspace") {
      event.preventDefault();
    }
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onSubmit(jobApplicationFormData);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={12}>
          <h3>{formType} Job Application</h3>
          <Form>
            <FloatingLabel
              controlId="dateAppliedString"
              label="Date applied"
              className="mb-3"
            >
              <Form.Control
                type="date"
                name="dateAppliedString"
                value={jobApplicationFormData.dateAppliedString}
                onChange={handleChange}
                onKeyDown={handleBackspaceOnDate}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="postingUrl"
              label="Posting URL"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="postingUrl"
                value={jobApplicationFormData.postingUrl}
                placeholder="Posting URL"
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="jobTitle"
              label="Job title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="jobTitle"
                value={jobApplicationFormData.jobTitle}
                placeholder="Job title"
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="companyName"
              label="Company name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="companyName"
                value={jobApplicationFormData.companyName}
                placeholder="Company name"
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="hiringTeam"
              label="Hiring team"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="hiringTeam"
                value={jobApplicationFormData.hiringTeam}
                placeholder="Hiring team"
                onChange={handleChange}
              />
            </FloatingLabel>
            <InputGroup className="mb-3">
              <FloatingLabel controlId="minSalary" label="Min salary">
                <Form.Control
                  type="number"
                  name="minSalary"
                  value={jobApplicationFormData.minSalary}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="maxSalary" label="Max salary">
                <Form.Control
                  type="number"
                  name="maxSalary"
                  value={jobApplicationFormData.maxSalary}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </InputGroup>
            <FloatingLabel
              controlId="jobDescription"
              label="Job description"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                name="jobDescription"
                value={jobApplicationFormData.jobDescription}
                placeholder="Job description"
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel controlId="notes" label="Notes" className="mb-3">
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                name="notes"
                value={jobApplicationFormData.notes}
                placeholder="Notes"
                onChange={handleChange}
              />
            </FloatingLabel>
            <Button
              variant="primary"
              type="button"
              onClick={handleSubmit}
              style={{ width: "100%" }}
            >
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default JobApplicationForm;
