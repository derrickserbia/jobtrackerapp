import { Container, Row } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", textAlign: "center" }}
      id="error-page"
    >
      <Row>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Row>
    </Container>
  );
}

export default ErrorPage;
