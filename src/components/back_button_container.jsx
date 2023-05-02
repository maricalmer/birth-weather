import React from 'react';

import BackButton from '../styled/back_button';

import animateCard from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const BackButtonContainer = (props) => {
	const handleOnClick = () => {
		animateCard("calendar-card");
		animateCard("results-data-card");


		const resultsTitle = document.querySelector('.results-title-anime-js');
		const whatDateTitle = document.querySelector('.what-date-title-anime-js');
		hideTitle(resultsTitle);
		showTitle(whatDateTitle);
	}
  return (
		<BackButton onClick={handleOnClick}>
			Try again
		</BackButton>
  );
}

export default BackButtonContainer;
