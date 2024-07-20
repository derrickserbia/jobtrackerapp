import "bootstrap/dist/css/bootstrap.min.css";
import JobApplicationsList from "./components/JobApplicationsList";
import JobApplicationForm from "./components/JobApplicationForm";
import { Container } from "react-bootstrap";

export const API_URL = "/jobapplications";

function App() {
  return (
    <Container fluid="lg">
      <JobApplicationForm />
      <JobApplicationsList />
    </Container>
  );
}

export default App;
