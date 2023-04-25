import React from 'react';

import IntroButton from '../styled/intro_button';
import { showTitle, hideTitle } from '../utils/title_motion';
import { hideIntroCard, showSearchCard } from '../utils/frame_motion';

const Intro = (props) => {
	const handleOnClick = () => {
		hideIntroCard();
		showSearchCard();
		const whatWeatherTitle = document.querySelector('.what-weather-title-anime-js');
		const whatCityTitle = document.querySelector('.what-city-title-anime-js');
		hideTitle(whatWeatherTitle);
		showTitle(whatCityTitle);
	}
  return (
		<IntroButton onClick={handleOnClick}>
			Get Started
		</IntroButton>
  );
}

export default Intro;
