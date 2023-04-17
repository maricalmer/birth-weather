import React, { useState, useEffect, useRef } from 'react'

import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

import matchIconClass from '../utils/icon_matcher.js'


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
    /* const historicalWeatherEndpoint = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.latitude}&longitude=${city.longitude}&start_date=2023-01-01&end_date=2023-03-26&daily=weathercode,sunrise,sunset,precipitation_sum,temperature_2m_mean&timezone=${city.timezone}` */
    /* const historicalWeatherEndpoint = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.latitude}&longitude=${city.longitude}&start_date=2023-03-29&end_date=2023-03-29&hourly=rain,snowfall,cloudcover_mid,direct_normal_irradiance&timezone=${city.timezone}` */
    const historicalWeatherEndpoint = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.latitude}&longitude=${city.longitude}&start_date=2022-12-12&end_date=2022-12-12&hourly=rain,snowfall,cloudcover_mid,direct_normal_irradiance&daily=temperature_2m_mean,sunrise,sunset,rain_sum,snowfall_sum&timezone=${city.timezone}`
    const response = await fetch(historicalWeatherEndpoint);
    const data = await response.json();

    console.log(data)
    console.log(data.daily.snowfall_sum[0] > 0)
    console.log(matchIconClass(data))



  }

  return (
    <div className="App-container" ref={myRef}>
      < SearchBar query={query} setQuery={setQuery} getCitiesData={getCitiesData}/>
      < CityList suggestedCities={suggestedCities} getCityGeocode={getCityGeocode}/>
    </div>
  )
}

export default App;
