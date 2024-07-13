import { Box, Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import dayjs from "dayjs";

const term = "Job Application"

function JobApplicationList({ data, onDelete }) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'jobTitle', headerName: 'Job title', width: 260 },
        { field: 'companyName', headerName: 'Company', width: 260 },
        { field: 'statusText', headerName: 'Application status', width: 260 },
        { 
            field: 'dateApplied', 
            headerName: 'Date applied', 
            width: 260,
        },
    ];

    function getApplicationStatusText(statusId) {
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

    const formattedData = Array.isArray(data) ? data.map(job => ({
        ...job,
        statusText: getApplicationStatusText(job.status),
    })) : [];

    return (
        <Box sx={{ width: '100%', height: 400 }}>
            <h2>{term}s</h2>
            <DataGrid
                rows={formattedData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                        rowCount: 10
                    }
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Box>
    )
}

export default JobApplicationList;