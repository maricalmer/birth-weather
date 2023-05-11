import React from 'react';

import showResults from '../hooks/useSelectCity.js';

const City = (props) => {
	const srcUrl = `https://hatscripts.github.io/circle-flags/flags/${props.city.country_code.toLowerCase()}.svg`

	const handleClick = () => {
		props.updateSelectedCity(props.city);
		props.updateCityInfo(props.city);
		showResults();
	}

  return (
    <div className='city' onClick={handleClick}>
			<p className='city-data-item'>{props.city.name},</p>
			<p className='city-data-item'>{props.city.admin1},</p>
			<p className='city-data-item'>{props.city.country_code}</p>
			<img src={srcUrl} alt='' width="18"></img>
    </div>
  );
}

export default City;
