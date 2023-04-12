

const useCityGeocode = (city) => {
  const { status, data, error } = useQuery(`${city}`, city ? () => fetchCityGeocode(city) : undefined)

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return data
}

export default useCityGeocode;
