import React from 'react';

import IntroText from '../styled/intro_text';
import IntroButton from '../styled/intro_button';

const Intro = (props) => {
	const handleOnClick = () => {
		const titles = document.querySelectorAll('.title-anime');
		titles.forEach((title) => {
			title.classList.toggle("title-anime__animated");
		})
	}
  return (
		<div className='intro-wrapper'>
    	<IntroText className='title-anime'>
				What was the weather like on your birth date?
			</IntroText>
			<IntroButton onClick={handleOnClick}>
				Get Started
			</IntroButton>
		</div>
  );
}

export default Intro;
