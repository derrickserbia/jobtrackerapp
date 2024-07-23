import { useEffect, useState, useTransition } from "react";
import { JobApplication } from "../models/JobApplication";
import { Table, Button, Pagination } from "react-bootstrap";
import { getApplicationStatusText } from "../models/ApplicationStatus";
import { Link } from "react-router-dom";
import { API_URL } from "../App";
import { BsTrashFill } from "react-icons/bs";

function JobApplicationsList() {
  const [jobApplicationsData, setJobApplicationsData] = useState<
    JobApplication[]
  >([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchJobApplicationData = () => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setJobApplicationsData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    };

    fetchJobApplicationData();
  }, []);

  const handleDelete = (id: number) => {
    console.log(`deleting ID: [${id}]`);
  };

  //   const salaryFormatter = Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });

  const salaryFormatter = (input: number) => {
    let output = input / 1000;
    return `$${output}k`;
  };

  return (
    <>
      <h3>Job Applications</h3>
      {isLoading ? (
        <p>Loading data...</p>
      ) : jobApplicationsData.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <>
          <Table striped hover responsive size="sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Job title</th>
                <th scope="col">Company</th>
                <th scope="col">Status</th>
                <th scope="col">Date applied</th>
                <th scope="col">Minimum salary</th>
                <th scope="col">Maximum salary</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobApplicationsData.map((jobApplication) => (
                <tr key={jobApplication.id}>
                  <th scope="row">{jobApplication.id}</th>
                  <td width="30%">
                    <Link to={`/jobapplications/${jobApplication.id}`}>
                      {jobApplication.jobTitle}
                    </Link>
                  </td>
                  <td>{jobApplication.companyName}</td>
                  <td>{getApplicationStatusText(jobApplication.status)}</td>
                  <td>
                    {new Date(jobApplication.dateApplied)
                      .toISOString()
                      .slice(0, 10)}
                  </td>
                  <td>{salaryFormatter(jobApplication.minSalary)}</td>
                  <td>{salaryFormatter(jobApplication.maxSalary)}</td>
                  <td className="align-middle">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(jobApplication.id)}
                    >
                      <BsTrashFill />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination size="sm">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </>
      )}
    </>
  );
}
export default JobApplicationsList;
