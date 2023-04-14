import React from 'react';

const SearchBar = (props) => {
  const query = props.query

  const handleChange = (newQuery) => {
    props.setQuery(newQuery)
    props.getCitiesData(newQuery)
  }
  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <input
        type="text"
        value={query}
        onChange={(e) => {handleChange(e.target.value)}}
        className="form-control form-search"
      />
    </form>
  );
}
  
export default SearchBar;