import React from 'react';
import { useQuery } from '@tanstack/react-query'
import fetchCityGeocode from '../utils/api/fetchCityGeocode';

import City from './city';

const CityList = (props) => {
	const results = {}
	const query = props.query || 'berlin'
	const { status, data, error } = useQuery({ queryKey: [query, Object.keys(results).length], queryFn: () => fetchCityGeocode(query) })
  

	if (data?.length > 0) {
    results[`${query}`] = data.results
  }


	console.log(results)

	if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className='city_output'>
			{data.results.map((city) => {
				return (
					<City name={city.name} country={city.country} iso={city.country_code} key={city.id}/>
				)
			})}
    </div>
  );
}

export default CityList;
