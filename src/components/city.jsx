import React from 'react';

const City = (props) => {
	const srcUrl = `https://hatscripts.github.io/circle-flags/flags/${props.iso.toLowerCase()}.svg`
  return (
    <div className='city'>
			<p className='city-item'>{props.name}</p>
			<p className='city-item'>{props.country}</p>
			<p className='city-item'>{props.iso}</p>
			<img src={srcUrl} alt='' width="18"></img>
    </div>
  );
}

export default City;