import React from 'react';

import City from './city';


const CityList = (props) => {
  const cities = props.suggestedCities
  if (!cities || !cities.results) return

  return (
    <div className='city_output'>
			{cities.results.map((city) => {
				return (
					<City city={city} getCityGeocode={props.getCityGeocode} key={city.id}/>
				)
			})}
    </div>
  );
}

export default CityList;
