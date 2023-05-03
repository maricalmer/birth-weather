import React from 'react';

import Button from '../styled/buttons/button';
import { showTitle, hideTitle } from '../utils/title_motion';
import animateCard from '../utils/frame_motion';

const Intro = (props) => {
	const handleOnClick = () => {
		animateCard("intro-frame");
		animateCard("calendar-section");
		const whatWeatherTitle = document.querySelector('.what-weather-title-anime-js');
		const whatDateTitle = document.querySelector('.what-date-title-anime-js');
		hideTitle(whatWeatherTitle);
		showTitle(whatDateTitle);
	}
  return (
		<Button onClick={handleOnClick}>
			Get Started
		</Button>
  );
}

export default Intro;
