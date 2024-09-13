export interface JobApplication {
  id: number;
  jobTitle: string;
  companyName: string;
  applicationStatus: number;
  dateAppliedString: string;
  jobDescription: string;
  notes: string;
  minSalary: number;
  maxSalary: number;
  postingUrl: string;
  hiringTeam: string;
}
