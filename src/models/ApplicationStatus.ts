export enum ApplicationStatus {
  Pending = 0,
  InterviewScheduled = 1,
  RejectedByEmployer = 2,
  Withdrawn = 3,
  OfferReceived = 4,
  OfferAccepted = 5,
}

export function getApplicationStatusText(status: ApplicationStatus): string {
  switch (status) {
    case ApplicationStatus.Pending:
      return "Pending";
    case ApplicationStatus.InterviewScheduled:
      return "Interview Scheduled";
    case ApplicationStatus.RejectedByEmployer:
      return "Rejected By Employer";
    case ApplicationStatus.Withdrawn:
      return "Withdrawn";
    case ApplicationStatus.OfferReceived:
      return "Offer Received";
    default:
      return "Unknown Status";
  }
}
