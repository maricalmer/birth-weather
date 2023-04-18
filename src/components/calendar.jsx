import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import dayjs from 'dayjs';
import convertDate from '../utils/date_converter';

const Calendar = (props) => {
  const handleAccept = (date) => {
    const formattedDate = convertDate(date);
    props.updateSelectedBirthDate(formattedDate);
    props.updateCityInfo(formattedDate);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker 
        orientation="landscape"
        disableFuture={true}
        disableHighlightToday={true}
        defaultValue={dayjs('2000-01-01')}
        minDate={dayjs('1940-01-01')}
        maxDate={dayjs()}
        onAccept={handleAccept}
        slotProps={{actionBar: {actions: ['accept']}
        
        }}/>
    </LocalizationProvider>
  );
}

export default Calendar;