import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import dayjs from 'dayjs';
import convertDate from '../utils/date_converter';

import { hideCalendarCard, showResultsCard } from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const Calendar = (props) => {
  const handleAccept = (date) => {
    const formattedDate = convertDate(date);
    props.updateSelectedBirthDate(formattedDate);
    props.updateCityInfo(formattedDate);
    const whatDateTitle = document.querySelector('.what-date-title-anime-js');
		const resultsTitle = document.querySelector('.results-title-anime-js');
		hideTitle(whatDateTitle);
		showTitle(resultsTitle);
    hideCalendarCard();
    showResultsCard();
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
        sx={{backgroundColor: 'transparent', color: '#2d2f31'}}
        slotProps={{actionBar: {actions: ['accept']}
        }}/>
    </LocalizationProvider>
  );
}

export default Calendar;