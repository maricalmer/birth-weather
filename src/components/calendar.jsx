import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import dayjs from 'dayjs';

const Calendar = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="landscape" disableFuture={true} disableHighlightToday={true} defaultValue={dayjs('2000-01-01')} maxDate={dayjs('2000-01-01')}/>
    </LocalizationProvider>
  );
}

export default Calendar;