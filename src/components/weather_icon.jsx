import React from 'react';

const WeatherIcon = (props) => {
  if (props.cityWeatherIcon == null) return;

  return (
    <div>
      <div className='icon-title'>{`${props.cityWeatherIcon.description}`}</div>
      <i className={`weather-icon ${props.cityWeatherIcon.class}`}></i>
    </div>
  );
}

export default WeatherIcon;
