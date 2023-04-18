import React from 'react';

const CityWeatherData = (props) => {
	if (props.cityData == null) return;

  return (
    <div className="city-weather-data">
    	<p>{props.cityData.daily.sunrise[0]}</p>
    	<p>{props.cityData.daily.sunset[0]}</p>
    	<p>{props.cityData.daily.temperature_2m_mean[0]}</p>
		</div>
  );
}

export default CityWeatherData;