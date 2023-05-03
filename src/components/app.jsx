import React, { useState, useEffect, useRef } from 'react'

import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

import CardWrapper from './card_wrapper';
import matchIconClass from '../utils/icon_matcher.js'
import getCitiesData from '../hooks/useCitiesData.js'
import getCityData from '../hooks/useCityData.js'

import Container from '../styled/containers/container.js'
import MainContainer from '../styled/containers/main_container.js'
import CloudsContainer from '../styled/containers/clouds_container.js'
import CloudsBorder from '../styled/cards/clouds_border.js'
import Title from '../styled/titles/title.js'


const App = () => {
  const [query, setQuery] = useState('');
  const [suggestedCities, setSuggestedCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState({name: ''});
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

  const updateSelectedBirthDate = (date) => {
    setSelectedBirthDate(date);
  }

  const updateSelectedCity = (city) => {
    setSelectedCity(city);
  }

  const updateCityInfo = async (city) => {
    const cityData = await getCityData(city, selectedBirthDate);
    setCityData(cityData);
		const weatherIcon = matchIconClass(cityData);
		setCityWeatherIcon(weatherIcon);
  }

  return (
    <div>
      < MainContainer>
        < Container $small_height>
          < Title className='what-weather-title-anime-js'>
            What was the weather like on your birth date?
          </Title>
          < Title $hidden className='what-date-title-anime-js'>
            What is your date of birth?
          </Title>
          < Title $hidden className='what-city-title-anime-js'>
            In which city were you born?
          </Title>
          < Title $hidden className='results-title-anime-js'>
            Results
          </Title>
        </Container>
        < CloudsContainer ref={myRef}>
          < CloudsBorder>
            < CardWrapper
              query={query} 
              updateSuggestedCities={updateSuggestedCities}
              suggestedCities={suggestedCities}
              selectedCity={selectedCity}
              updateSelectedCity={updateSelectedCity}
              updateSelectedBirthDate={updateSelectedBirthDate}
              updateCityInfo={updateCityInfo}
              cityWeatherIcon={cityWeatherIcon}
              cityData={cityData}
            />
          </CloudsBorder>
        </CloudsContainer>
      </MainContainer>
    </div>
  )
}

export default App;
