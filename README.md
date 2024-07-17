# JobTrackerApp (Frontend)

JobTracker is a user-friendly React application for managing your job application process. This frontend provides a streamlined interface to interact with the JobTracker API backend, allowing you to create, view, edit, and delete job applications.

## Features

* **Job List:**  Displays a sortable table of your job applications, including job title, company, and status.
* **Job Details View:**  View and edit all details for a specific job application, including job description, notes, and salary expectations.
* **Create New Application:**  Easily add new job applications with a form that includes validation and default values.
* **Delete Application:** Remove unwanted applications from your list.
* **Real-time Updates:**  The list of applications updates automatically after creating, updating, or deleting a job.
* **Sorting:** Sort job applications by ID, job title, company, salary, or status.
* **Navigation:**  Seamlessly navigate between the list of applications and individual application details using React Router.

## Getting Started

### Prerequisites

* **Node.js and npm/yarn:** Ensure you have Node.js and either npm or yarn installed on your system.

### Installation & Running

1. **Clone the Repository:**

   ```bash
   git clone [https://github.com/](https://github.com/)<your_username>/JobTracker.git
   cd JobTracker/JobTrackerApp  // Navigate to frontend directory
   ```

2. **Install Dependencies:**
   ```bash
   npm install  (or yarn install)
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev   (or yarn dev)
   ```

   Your browser should automatically open to `http://localhost:3000` (or the port specified in your Vite configuration).


## How to Use

* **Job List:** The main page displays a list of your job applications. You can sort by any column by clicking on the header. Click on a job title to view and edit its details.
* **Add New Application:**  Click the "New Job Application" button to open the form for creating a new job application. Fill out the form and click "Create."
* **Edit Application:** Click on a job title in the list to view the details. You can then edit the information and click "Update" to save the changes.
* **Delete Application:** Click the "Delete" button next to a job application in the list to remove it.


## Technologies Used

* **React:**  Core UI library.
* **Material UI:** UI component library for styling and layout.
* **React Router:** For handling navigation between pages.
* **day.js:**  For working with dates and time.
* **fetch API (or Axios):** For making API requests to the backend.

## Project Structure

```
JobTrackerApp/
├── public/
├── src/
│   ├── components/    // Reusable components
│   ├── pages/        // Page components
│   └── App.jsx        // Main app component
├── package.json
└── ...
```

## Backend Integration

This frontend application is designed to work with the **JobTracker API** backend, which you'll need to have running on `http://localhost:5001` (or your configured port) to interact with the data. 


Let me know if you have any other questions!