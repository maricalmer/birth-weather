import React from 'react';

const SearchBar = (props) => {
  const query = props.query

  const handleChange = (newQuery) => {
    props.updateSuggestedCities(newQuery);
  }
  
  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <input
        type="text"
        value={query}
        placeholder="type here..."
        onChange={(e) => {handleChange(e.currentTarget.value)}}
        className="search-form__input form-control form-search"
        name="city"
      />
    </form>
  );
}
  
export default SearchBar;