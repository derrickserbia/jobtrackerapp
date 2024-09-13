import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import App from "./App.tsx";
import { Container } from "react-bootstrap";
import NewJobApplicationPage from "./pages/NewJobApplicationPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import JobApplicationsListPage from "./pages/JobApplicationsListPage.tsx";
import JobApplicationDetailsPage from "./pages/JobApplicationDetailsPage.tsx";
import EditJobApplicationPage from "./pages/EditJobApplicationPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobapplications/new",
    element: <NewJobApplicationPage />,
  },
  {
    path: "/jobapplications",
    element: <JobApplicationsListPage />,
  },
  {
    path: "/jobapplications/:id",
    element: <JobApplicationDetailsPage />,
  },
  {
    path: "/jobapplications/edit",
    element: <EditJobApplicationPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <Container fluid="lg">
        <RouterProvider router={router} />
      </Container>
    </Layout>
  </StrictMode>
);
