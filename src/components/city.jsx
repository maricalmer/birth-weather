import React from 'react';

const City = (props) => {
	const srcUrl = `https://hatscripts.github.io/circle-flags/flags/${props.city.country_code.toLowerCase()}.svg`

	const handleClick = () => {
		props.updateCityInfo(props.city)
	}

  return (
    <div className='city' onClick={handleClick}>
			<p className='city-item'>{props.city.name}</p>
			<p className='city-item'>{props.city.country}</p>
			<p className='city-item'>{props.city.country_code}</p>
			<img src={srcUrl} alt='' width="18"></img>
    </div>
  );
}

export default City;
