import React from 'react';

import BackButton from '../styled/back_button';

import { animateResultsCard, animateCalendarCard } from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const BackButtonContainer = (props) => {
	const handleOnClick = () => {
		animateCalendarCard();
		animateResultsCard();


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
