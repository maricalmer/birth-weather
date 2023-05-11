import React from 'react';

import Button from '../styled/buttons/button';

import showCalendar from '../hooks/useGetStarted.js';

const Intro = (props) => {
	const handleOnClick = () => {
		showCalendar();
	}
  return (
		<Button onClick={handleOnClick}>
			Get Started
		</Button>
  );
}

export default Intro;
