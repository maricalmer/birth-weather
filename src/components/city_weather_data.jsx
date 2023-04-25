import React from 'react';

import convertTime from '../utils/time_converter';

const CityWeatherData = (props) => {
	if (props.cityData == null) return;

	const sunriseTime = convertTime(props.cityData.daily.sunrise[0]);
	const sunsetTime = convertTime(props.cityData.daily.sunset[0]);

  return (
    <div className="city-weather-data">
    	<p>Sunrise: {sunriseTime}</p>
    	<p>Sunset: {sunsetTime}</p>
    	<p>Average temperature: {props.cityData.daily.temperature_2m_mean[0]}°</p>
		</div>
  );
}

export default CityWeatherData;