import React from 'react';

import IntroButton from '../styled/intro_button';
import { showTitle, hideTitle } from '../utils/title_motion';
import { hideIntroCard, showCalendarCard } from '../utils/frame_motion';

const Intro = (props) => {
	const handleOnClick = () => {
		hideIntroCard();
		showCalendarCard();
		const whatWeatherTitle = document.querySelector('.what-weather-title-anime-js');
		const whatDateTitle = document.querySelector('.what-date-title-anime-js');
		hideTitle(whatWeatherTitle);
		showTitle(whatDateTitle);
	}
  return (
		<IntroButton onClick={handleOnClick}>
			Get Started
		</IntroButton>
  );
}

export default Intro;
