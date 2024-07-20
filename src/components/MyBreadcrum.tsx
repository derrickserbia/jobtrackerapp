import { Breadcrumb } from "react-bootstrap";

function MyBreadcrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/jobapplications">List</Breadcrumb.Item>
      <Breadcrumb.Item href="#">JobTitle</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default MyBreadcrumb;
