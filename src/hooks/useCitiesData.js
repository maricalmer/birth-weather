const getCitiesData = async (query) => {
  const geocodeEndpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&language=en&count=10&format=json`;
  const response = await fetch(geocodeEndpoint);
  const data = await response.json();
  return data;
}

export default getCitiesData;
