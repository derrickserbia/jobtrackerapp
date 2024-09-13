export interface JobApplicationDetailsDTO {
  id: number;
  userId: number;
  jobTitle: string;
  companyName: string;
  hiringTeam: string;
  jobPostingUrl: string;
  jobDescription: string;
  minSalary: number;
  maxSalary: number;
  jobApplicationStatusId: number;
  notes: string;
  appliedDate: Date;
  createdDate: Date;
  updatedDate: Date;
}
