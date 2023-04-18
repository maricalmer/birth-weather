import React from 'react';

const WeatherIcon = (props) => {
  return (
    <i className={`weather-icon ${props.cityWeatherIcon}`}></i>
  );
}

export default WeatherIcon;
