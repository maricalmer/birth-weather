import React from 'react';

import convertTime from '../utils/time_converter';
import { convertDateForData } from '../utils/date_converter';

const CityWeatherData = (props) => {
	if (props.cityData == null) return;

	const formattedDate = convertDateForData(props.cityData.daily.time[0]);
	const sunriseTime = convertTime(props.cityData.daily.sunrise[0]);
	const sunsetTime = convertTime(props.cityData.daily.sunset[0]);
	const averageCloudsCoverage = Math.round(props.cityData.hourly.cloudcover_mid.reduce((a,b) => a + b,0) / 24);
	const hoursRain = props.cityData.hourly.rain.filter( (x) => x > 0).length;
	const hoursSnow = props.cityData.hourly.snowfall.filter( (x) => x > 0).length;

  return (
    <div className="city-weather-data">
    	<p><span className='city-weather-data__category'>Date:</span> {formattedDate}</p>
    	<p><span className='city-weather-data__category'>City:</span> {props.selectedCity.name}</p>
    	<p><span className='city-weather-data__category'>Sunrise:</span> {sunriseTime}</p>
    	<p><span className='city-weather-data__category'>Sunset:</span> {sunsetTime}</p>
    	<p><span className='city-weather-data__category'>Average temperature:</span> {props.cityData.daily.temperature_2m_mean[0]}°</p>
    	<p><span className='city-weather-data__category'>Average clouds coverage:</span> {averageCloudsCoverage}%</p>
    	<p><span className='city-weather-data__category'>Hours of rain:</span> {hoursRain}</p>
    	<p><span className='city-weather-data__category'>Hours of snow:</span> {hoursSnow}</p>
		</div>
  );
}

export default CityWeatherData;