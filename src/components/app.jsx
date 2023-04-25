import React, { useState, useEffect, useRef } from 'react'

import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

import CardContainer from './card_container';
import matchIconClass from '../utils/icon_matcher.js'
import getCitiesData from '../hooks/useCitiesData.js'
import getCityData from '../hooks/useCityData.js'

import AppContainer from '../styled/app_container.js'
import CloudsContainer from '../styled/clouds_container.js'
import CloudsBorder from '../styled/clouds_border.js'
import TitleContainer from '../styled/title_container.js'
import InitialTitle from '../styled/initial_title.js'
import HiddenTitle from '../styled/hidden_title.js'

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

  const updateSelectedCity = (city) => {
    console.log('in updateSelectedCity');
    setSelectedCity(city);
  }

  const updateSelectedBirthDate = (date) => {
    console.log('in updateSelectedBirthDate');
    setSelectedBirthDate(date);
  }

  const updateCityInfo = async (date) => {
    console.log('in updateCityInfo');
    const cityData = await getCityData(selectedCity, date);
    setCityData(cityData);
		const weatherIcon = matchIconClass(cityData);
		setCityWeatherIcon(weatherIcon);
  }

  console.log(selectedCity)

  return (
    <div>
      < AppContainer>
        < TitleContainer>
          < InitialTitle className='what-weather-title-anime-js'>
            What was the weather like on your birth date?
          </InitialTitle>
          < HiddenTitle className='what-city-title-anime-js'>
            In which city were you born?
          </HiddenTitle>
          < HiddenTitle className='what-date-title-anime-js'>
            What is your date of birth?
          </HiddenTitle>
          < HiddenTitle className='results-title-anime-js'>
            {`Results for ${selectedCity.name} on ${selectedBirthDate}`}
          </HiddenTitle>
        </TitleContainer>
        < CloudsContainer ref={myRef}>
          < CloudsBorder>
            < CardContainer
              query={query} 
              updateSuggestedCities={updateSuggestedCities}
              suggestedCities={suggestedCities}
              updateSelectedCity={updateSelectedCity}
              updateSelectedBirthDate={updateSelectedBirthDate}
              updateCityInfo={updateCityInfo}
              cityWeatherIcon={cityWeatherIcon}
              cityData={cityData}
            />
          </CloudsBorder>
        </CloudsContainer>
      </AppContainer>
    </div>
  )
}

export default App;
