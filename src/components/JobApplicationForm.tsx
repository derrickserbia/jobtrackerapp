import React, { ChangeEvent, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";
import { emptyJobApplication, JobApplication } from "../models/JobApplication";
import dayjs, { Dayjs } from "dayjs";

const headers = {
  "Content-type": "application/json",
};

function JobApplicationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(emptyJobApplication);

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
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (
    newJobApplication: JobApplication,
    event: React.FormEvent
  ) => {
    event.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(newJobApplication),
    })
      .then((response) => response.json())
      .then((returnedItem) => {
        navigate("/", { replace: true });
        console.log(returnedItem);
        setFormData(emptyJobApplication);
      });
  };

  const handleClear = () => {
    setFormData(emptyJobApplication);
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
                value={formData.dateApplied.toISOString().slice(0, 10)}
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
          <Button variant="secondary" type="button" onClick={handleClear}>
            Clear
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
export default JobApplicationForm;
