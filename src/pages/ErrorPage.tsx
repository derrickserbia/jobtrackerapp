import { Col, Container, Row } from "react-bootstrap";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container
      id="error-page"
      style={{ height: "50vh" }}
      className="align-content-center"
    >
      <Row>
        <Col className="text-center">
          <h1>Oops!</h1>
          <p>
            {isRouteErrorResponse(error)
              ? error.data?.message || error.statusText
              : "Sorry, an unexpected error has occurred."}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;
