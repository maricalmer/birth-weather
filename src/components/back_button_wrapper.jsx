import React from 'react';

import Button from '../styled/buttons/button';
import restartCycle from '../hooks/useBackButton.js';

const BackButtonWrapper = () => {
	const handleOnClick = () => {
		restartCycle();
	}
  return (
		<Button $restart onClick={handleOnClick}>
			Try again
		</Button>
  );
}

export default BackButtonWrapper;
