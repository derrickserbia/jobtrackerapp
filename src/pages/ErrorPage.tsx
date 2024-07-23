import { Button, Col, Container, Row } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import { GoAlertFill } from "react-icons/go";

function ErrorPage() {
  const error = useRouteError();

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "50vh", textAlign: "center" }}
    >
      <Row>
        <Col>
          <GoAlertFill size={70} color="orange" />
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <Button href="/" variant="primary">
            Return home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;
