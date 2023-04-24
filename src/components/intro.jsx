import React from 'react';

import IntroButton from '../styled/intro_button';

const Intro = (props) => {
	const handleOnClick = (e) => {
		const firstFrame = document.querySelector('.intro-card');
		const secondFrame = document.querySelector('.search-card');
		firstFrame.classList.add("intro-card__animated");
		secondFrame.classList.add("search-card__animated");
	}
  return (
		<IntroButton onClick={handleOnClick}>
			Get Started
		</IntroButton>
  );
}

export default Intro;
