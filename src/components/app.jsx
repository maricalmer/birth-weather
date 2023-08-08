import React, { useState } from 'react'

import CardWrapper from './card_wrapper';
import matchIconClass from '../utils/icon_matcher.js'
import getCitiesData from '../hooks/useCitiesData.js'
import getCityData from '../hooks/useCityData.js'

import Container from '../styled/containers/container.js'
import MainContainer from '../styled/containers/main_container.js'
import CardContainer from '../styled/containers/card_container.js'
import PurpleScreen from '../styled/containers/purple_screen.js'
import Clouds from '../styled/cards/clouds.js'
import Title from '../styled/titles/title.js'


const App = () => {
  const [query, setQuery] = useState('');
  const [suggestedCities, setSuggestedCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState({name: ''});
  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [cityWeatherIcon, setCityWeatherIcon] = useState(null);

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
    <main>
      < MainContainer>
        < Container $small_height>
          < Title className='title--visible what-weather-title-anime-js'>
            What was the weather like on your <span className="title--emphasize">birth date</span>?
          </Title>
          < Title className='title--hidden what-date-title-anime-js'>
            What is your date of birth?
          </Title>
          < Title className='title--hidden what-city-title-anime-js'>
            In which city were you born?
          </Title>
          < Title className='title--hidden results-title-anime-js'>
            Results
          </Title>
        </Container>

        < CardContainer className="CARD_CONTAINER">
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
          <PurpleScreen className="PURPLE_SCREEN"/>
          <Clouds className="CLOUDS"/>
        </CardContainer>
      </MainContainer>
    </main>
  )
}

export default App;
