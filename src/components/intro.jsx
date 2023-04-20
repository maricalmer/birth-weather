import React from 'react';

import IntroText from '../styled/intro_text';
import IntroButton from '../styled/intro_button';

const Intro = (props) => {
  return (
		<div>
    	<IntroText>
				What was the weather like on your birth date?
			</IntroText>
			<IntroButton>
				Get Started
			</IntroButton>
		</div>
  );
}

export default Intro;
