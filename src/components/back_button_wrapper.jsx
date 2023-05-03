import React from 'react';

import Button from '../styled/buttons/button';

import animateCard from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const BackButtonWrapper = () => {
	const handleOnClick = () => {
		animateCard("calendar-section");
		animateCard("results-data-section");
		const resultsTitle = document.querySelector('.results-title-anime-js');
		const whatDateTitle = document.querySelector('.what-date-title-anime-js');
		hideTitle(resultsTitle);
		showTitle(whatDateTitle);
	}
  return (
		<Button $with_top_margin onClick={handleOnClick}>
			Try again
		</Button>
  );
}

export default BackButtonWrapper;
