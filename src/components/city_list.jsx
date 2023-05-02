import React from 'react';

import City from './city';

const CityList = (props) => {
  const cities = props.suggestedCities;
  console.log(cities);
  if (!cities || !cities.results) return

  return (
    <div className='city_output'>
			{cities.results.map((city) => {
				return (
					<City city={city} updateSelectedCity={props.updateSelectedCity} updateCityInfo={props.updateCityInfo} key={city.id}/>
				)
			})}
    </div>
  );
}

export default CityList;
