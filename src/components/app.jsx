import React, { useState, useEffect, useRef } from 'react'

import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

import matchIconClass from '../utils/icon_matcher.js'
import getCitiesData from '../hooks/useCitiesData.js'
import getCityData from '../hooks/useCityData.js'
import AppContainer from '../styled/app_container.js'
import CloudsContainer from '../styled/clouds_container.js'

import CardContainer from './card_container';
import Calendar from './calendar';
import WeatherIcon from './weather_icon';
import CityWeatherData from './city_weather_data';
import CloudsBorder from '../styled/clouds_border.js'
import TitleBackContainer from '../styled/title_back_container.js'
import TitleBack from '../styled/title_back.js'

const App = () => {
  const [query, setQuery] = useState('berlin');
  const [suggestedCities, setSuggestedCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const [cityData, setCityData] = useState(null);
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

  const updateSelectedCity = (city) => {
    setSelectedCity(city);
  }

  const updateSelectedBirthDate = (date) => {
    setSelectedBirthDate(date);
  }

  const updateCityInfo = async (date) => {
    const cityData = await getCityData(selectedCity, date);
    setCityData(cityData);
		const weatherIcon = matchIconClass(cityData);
		setCityWeatherIcon(weatherIcon);
  }

  return (
    <div>
      < AppContainer>
        < CloudsContainer ref={myRef}>
          < CloudsBorder>
            < CardContainer
              query={query} 
              updateSuggestedCities={updateSuggestedCities}
              suggestedCities={suggestedCities}
              updateSelectedCity={updateSelectedCity}
            />
            < Calendar updateSelectedBirthDate={updateSelectedBirthDate} updateCityInfo={updateCityInfo}/>
            < WeatherIcon cityWeatherIcon={cityWeatherIcon}/>
            < CityWeatherData cityData={cityData}/>
          </CloudsBorder>
        </CloudsContainer>
        < TitleBackContainer>
          < TitleBack className='title-anime'>
            What was the weather like on your birth date?
          </TitleBack>
        </TitleBackContainer>
      </AppContainer>
    </div>
  )
}

export default App;
