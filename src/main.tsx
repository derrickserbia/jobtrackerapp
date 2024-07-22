import React from "react";
import ReactDOM from "react-dom/client";
import App, { API_URL } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import JobApplicationDetails from "./components/JobApplicationDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "jobapplications/:jobApplicationId",
    element: <JobApplicationDetails />,
    loader: async ({ params }) => {
      console.log(params);
      return fetch(`${API_URL}/${params.jobApplicationId}`);
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
