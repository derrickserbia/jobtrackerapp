import { LoaderFunction } from "react-router-dom";
import { ApplicationStatus } from "./ApplicationStatus";

export interface JobApplication {
  id: number;
  jobTitle: string;
  companyName: string;
  status: ApplicationStatus;
  dateApplied: Date;
  jobDescription: string;
  notes: string;
  minSalary: number;
  maxSalary: number;
  postingUrl: string;
  hiringTeam: string;
  techStack: string[];
}

export const emptyJobApplication: JobApplication = {
  id: 0,
  jobTitle: "",
  companyName: "",
  status: ApplicationStatus.Pending,
  dateApplied: new Date(),
  jobDescription: "",
  notes: "",
  minSalary: 0,
  maxSalary: 0,
  postingUrl: "",
  hiringTeam: "",
  techStack: [],
};

export type JobApplicationLoader = LoaderFunction<JobApplication>;
