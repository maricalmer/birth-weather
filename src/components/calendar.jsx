import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import useMediaQuery from '@mui/material/useMediaQuery';

import dayjs from 'dayjs';

import { convertDateForApi } from '../utils/date_converter';
import showCitySearch from '../hooks/useSelectDate.js';

const Calendar = (props) => {
  const handleAccept = (date) => {
    const formattedDate = convertDateForApi(date);
    props.updateSelectedBirthDate(formattedDate);
    showCitySearch();
  }

  const responsiveOrientation = useMediaQuery('(min-width:800px)') ? "landscape" : "portrait";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker 
        orientation= {responsiveOrientation}
        disableFuture={true}
        disableHighlightToday={true}
        defaultValue={dayjs('2000-01-01')}
        minDate={dayjs('1940-01-01')}
        maxDate={dayjs()}
        onAccept={handleAccept}
        sx={{backgroundColor: 'transparent', color: '#2d2f31'}}
        slotProps={{actionBar: {actions: ['accept']}
        }}/>
    </LocalizationProvider>
  );
}

export default Calendar;