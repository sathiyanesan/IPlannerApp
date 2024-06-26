import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box } from '@mui/material';

const DateTimeSelect = () => {

    const [startvalue, setStartValue] = React.useState<Dayjs | null>(dayjs(new Date()));
    const [endValue, setEndValue] = React.useState<Dayjs | null>(dayjs(new Date()).add(1, 'hour'));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                <Box display="flex" alignItems="center" gap={2} >
                    <DateTimePicker
                        label="Enter Start Date & Time"
                        value={startvalue}
                        onChange={(newValue) => setStartValue(newValue)}
                        // disablePast={true}
                    />
                    <DateTimePicker
                        label="Enter End Date & Time"
                        value={endValue}
                        onChange={(newValue) => setEndValue(newValue)}
                        // disablePast={true}
                    />
                </Box>


            </DemoContainer>
        </LocalizationProvider>
    );
}

export default DateTimeSelect;