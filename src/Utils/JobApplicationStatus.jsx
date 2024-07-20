export const JobApplicationStatus = {
    Pending: 0,
    InterviewScheduled: 1,
    RejectedByEmployer: 2,
    RejectedByMe: 3,
    OfferReceived: 4
}

export function getApplicationStatusText(statusId) {
    switch (statusId) {
        case 0:
            return 'Pending';
        case 1:
            return 'Interview Scheduled';
        case 2:
            return 'Rejected By Employer';
        case 3:
            return 'Rejected By Me';
        case 4:
            return 'Offer Received';
        default:
            return "Uknown Status";
    }
};