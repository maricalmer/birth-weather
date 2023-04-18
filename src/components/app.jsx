import React, { useState, useEffect, useRef } from 'react'

import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

import matchIconClass from '../utils/icon_matcher.js'
import getCitiesData from '../hooks/useCitiesData.js'
import getCityData from '../hooks/useCityData.js'

import SearchBar from './search_bar';
import CityList from './city_list';
import Calendar from './calendar';

const App = () => {
  const [query, setQuery] = useState('berlin');
  const [suggestedCities, setSuggestedCities] = useState(null);
  const [cityWeatherIcon, setCityWeatherIcon] = useState(null);
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

  const updateSuggestedCities = async (newQuery) => {
    setQuery(newQuery);
    const citiesData = await getCitiesData(newQuery);
    setSuggestedCities(citiesData);
  }

  const updateCityInfo = async (city) => {
    const cityData = await getCityData(city);
		const weatherIcon = await matchIconClass(cityData);
		setCityWeatherIcon(weatherIcon);
    console.log(weatherIcon)
  }

  return (
    <div className="App-container" ref={myRef}>
      < SearchBar query={query} updateSuggestedCities={updateSuggestedCities}/>
      < CityList suggestedCities={suggestedCities} updateCityInfo={updateCityInfo}/>
      < Calendar/>
    </div>
  )
}

export default App;
