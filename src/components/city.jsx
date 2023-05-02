import React from 'react';

import animateCard from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const City = (props) => {
	const srcUrl = `https://hatscripts.github.io/circle-flags/flags/${props.city.country_code.toLowerCase()}.svg`

	const handleClick = () => {
		props.updateSelectedCity(props.city);
		props.updateCityInfo(props.city);
		animateCard("suggested-cities-section");
		animateCard("search-bar");
		animateCard("results-data-section");
		const whatCityTitle = document.querySelector('.what-city-title-anime-js');
		const resultsTitle = document.querySelector('.results-title-anime-js');
		hideTitle(whatCityTitle);
		showTitle(resultsTitle);
	}

  return (
    <div className='city' onClick={handleClick}>
			<p className='city-data-item'>{props.city.name},</p>
			<p className='city-data-item'>{props.city.admin1},</p>
			<p className='city-data-item'>{props.city.country_code}</p>
			<img src={srcUrl} alt='' width="18"></img>
    </div>
  );
}

export default City;
