import React from 'react';

const WeatherIcon = (props) => {
  if (props.cityWeatherIcon == null) return;

  return (
    <div>
      <i className={`weather-icon ${props.cityWeatherIcon.class}`}></i>
      <div className='icon-title'>{`${props.cityWeatherIcon.description}`}</div>
    </div>
  );
}

export default WeatherIcon;
