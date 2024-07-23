import JobApplicationForm from "../components/JobApplicationForm";
import JobApplicationsList from "../components/JobApplicationsList";

function HomePage() {
  return (
    <>
      <JobApplicationForm></JobApplicationForm>
      <JobApplicationsList></JobApplicationsList>
    </>
  );
}

export default HomePage;
