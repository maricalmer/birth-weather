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
        sx={{
          backgroundColor: 'rgba(239, 246, 238, 0.6)',
          borderRadius: '8px',
          "& .MuiPickersYear-yearButton": {
            "&.Mui-selected": {
              backgroundColor: '#3a3942',
            }
          },
          "& .MuiPickersDay-root": {
            "&.Mui-selected": {
              backgroundColor: '#565366',
            },
            "&.Mui-selected:hover": {
              backgroundColor: '#3a3942',
            },
            "&.Mui-selected:focus": {
              backgroundColor: '#3a3942',
            },
          },
          "& .MuiButton-text": {
            fontWeight: 1000,
            color: 'black'
          },
          "& .MuiButton-text:hover": {
            backgroundColor: '#3a3942',
            color: 'white'
          }
        }}
        slotProps={{actionBar: {actions: ['accept']}
        }}/>
    </LocalizationProvider>
  );
}

export default Calendar;
