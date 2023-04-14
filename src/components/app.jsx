import React, { useState, useEffect, useRef } from 'react'

import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'


import SearchBar from './search_bar';
import CityList from './city_list';

const App = () => {
  const [query, setQuery] = useState('berlin');
  const [suggestedCities, setSuggestedCities] = useState(null);
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(CLOUDS({
        el: myRef.current,
        THREE: THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const getCitiesData = async (query) => {
    const geocodeEndpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&language=en&count=10&format=json`
    const response = await fetch(geocodeEndpoint);
    const data = await response.json();
    setSuggestedCities(data)
  }

  const getCityGeocode = async (city) => {
    const historicalWeatherEndpoint = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.latitude}&longitude=${city.longitude}&start_date=2023-03-26&end_date=2023-03-26&daily=weathercode,temperature_2m_mean&timezone=${city.timezone}`
    const response = await fetch(historicalWeatherEndpoint);
    const data = await response.json();
    console.log(data.daily.weathercode[0])
    console.log(data.daily.temperature_2m_mean[0])
  }

  return (
    <div className="App-container" ref={myRef}>
      < SearchBar query={query} setQuery={setQuery} getCitiesData={getCitiesData}/>
      < CityList suggestedCities={suggestedCities} getCityGeocode={getCityGeocode}/>
    </div>
  )
}

export default App;
