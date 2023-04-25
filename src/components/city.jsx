import React from 'react';

import { hideSuggestedCities, hideSearchCard, showCalendarCard } from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const City = (props) => {
	const srcUrl = `https://hatscripts.github.io/circle-flags/flags/${props.city.country_code.toLowerCase()}.svg`

	const handleClick = () => {
		props.updateSelectedCity(props.city)
		hideSuggestedCities();
		hideSearchCard();
		showCalendarCard();
		const whatCityTitle = document.querySelector('.what-city-title-anime-js');
		const whatDateTitle = document.querySelector('.what-date-title-anime-js');
		hideTitle(whatCityTitle);
		showTitle(whatDateTitle);
	}

  return (
    <div className='city' onClick={handleClick}>
			<p className='city-item'>{props.city.name},</p>
			<p className='city-item'>{props.city.admin1},</p>
			<p className='city-item'>{props.city.country_code}</p>
			<img src={srcUrl} alt='' width="18"></img>
    </div>
  );
}

export default City;
