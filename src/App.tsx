import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobApplicationsPage from "./pages/JobApplicationsPage";
import ErrorPage from "./pages/ErrorPage";
import JobApplicationPage, {
  jobApplicationLoader,
} from "./pages/JobApplicationPage";

export const API_URL = "/jobapplications";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="jobapplications" element={<JobApplicationsPage />} />
      <Route
        path="jobapplications/:id"
        element={<JobApplicationPage />}
        loader={jobApplicationLoader}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
