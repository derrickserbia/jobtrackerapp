import { useState, useEffect, forwardRef } from "react";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import Stack from '@mui/material/Stack';
import { FormControl } from "@mui/material";

export const ApplicationStatus = {
    Pending: 0,
    InterviewScheduled: 1,
    RejectedByEmployer: 2,
    RejectedByMe: 3,
    OfferReceived: 4
}

function JobApplication({ onCreate }) {
    const today = dayjs();
    const emptyForm = {
        jobTitle: "",
        companyName: "",
        status: ApplicationStatus.Pending,
        dateApplied: today,
        jobDescription: "",
        notes: "",
        minSalary: 0,
        maxSalary: 0,
    };
    const [formData, setFormData] = useState(emptyForm);

    useEffect(() => {
        const today = dayjs();
        setFormData(prevData => ({ ...prevData, dateApplied: today }))
    }, []);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCancel = () => {
        setFormData(emptyForm);
    };

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const TextareaAutosize = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
    );

    const Button = styled(BaseButton)(
        ({ theme }) => `
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.5;
        background-color: ${blue[500]};
        padding: 8px 16px;
        border-radius: 8px;
        color: white;
        transition: all 150ms ease;
        cursor: pointer;
        border: 1px solid ${blue[500]};
        box-shadow: 0 2px 1px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
            }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};
      
        &:hover {
          background-color: ${blue[600]};
        }
      
        &.${buttonClasses.active} {
          background-color: ${blue[700]};
          box-shadow: none;
          transform: scale(0.99);
        }
      
        &.${buttonClasses.focusVisible} {
          box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
          outline: none;
        }
      
        &.${buttonClasses.disabled} {
          background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
          color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
          border: 0;
          cursor: default;
          box-shadow: none;
          transform: scale(1);
        }
        `,
    );

    return (
        <>
            <h2>New Job Application</h2>
            <FormControl>
                <Box sx={{ display: 'flex', gap: 2}}>
                    <TextField
                        name="jobTitle"
                        placeholder="Enter job title"
                        value={formData.jobTitle}
                        onChange={handleFormChange}
                        required
                    />
                    <TextField
                        name="companyName"
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={handleFormChange}
                        required
                    />
                    <TextField
                        name="status"
                        select
                        defaultValue={ApplicationStatus.Pending}
                        helperText="Job application status"
                        onChange={handleFormChange}
                    >
                        <MenuItem value={ApplicationStatus.Pending}>Pending</MenuItem>
                        <MenuItem value={ApplicationStatus.InterviewScheduled}>Interview Scheduled</MenuItem>
                        <MenuItem value={ApplicationStatus.RejectedByEmployer}>Rejected by Employer</MenuItem>
                        <MenuItem value={ApplicationStatus.RejectedByMe}>Rejected by Me</MenuItem>
                        <MenuItem value={ApplicationStatus.OfferReceived}>Offer Received</MenuItem>
                    </TextField>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            name="dateApplied"
                            value={formData.dateApplied}
                            onChange={(newValue) => { formData.dateApplied = newValue }}
                        />
                    </LocalizationProvider>
                    <TextField
                        type="number"
                        inputMode="number"
                        placeholder="Enter minimum salary"
                        name="minSalary"
                        value={formData.minSalary}
                        onChange={handleFormChange}
                    />
                    <TextField
                        type="number"
                        inputMode="number"
                        placeholder="Enter maximum salary"
                        name="maxSalary"
                        value={formData.maxSalary}
                        onChange={handleFormChange}
                    />
                </Box>

                <div>
                    <TextareaAutosize
                        name="jobDescription"
                        placeholder="Enter job description"
                        value={formData.jobDescription}
                        onChange={handleFormChange}
                    ></TextareaAutosize>
                </div>
                <div>
                    <TextareaAutosize
                        name="notes"
                        placeholder="Enter your notes"
                        value={formData.notes}
                        onChange={handleFormChange}
                    ></TextareaAutosize>
                </div>

                <Stack spacing={2} direction="row">
                    <Button type="submit" onClick={() => onCreate(formData)}>Create</Button>
                    <Button type="button" onClick={handleCancel}>Cancel</Button>
                </Stack>

            </FormControl>
        </>
    );
};

export default JobApplication;