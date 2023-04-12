import React from 'react';
import fetchCityGeocode from '../utils/api/fetchCityGeocode';


const SearchBar = (props) => {
    return (
      <input
        type="text"
        className="form-control form-search"
				onChange={() => fetchCityGeocode()}
      />
    );

  }
  
export default SearchBar;