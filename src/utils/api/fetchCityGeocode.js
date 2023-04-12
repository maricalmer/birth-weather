const fetchCityGeocode = async (city) => {
  console.log('api call')
  const geocodeEndpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=en&count=10&format=json`
  const rawData = await fetch(geocodeEndpoint);
  const data = await rawData.json();
  return data;
};
  
export default fetchCityGeocode;
  