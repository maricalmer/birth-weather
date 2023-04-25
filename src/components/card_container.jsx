import React from 'react';

import SearchBar from './search_bar';
import CityList from './city_list';
import Intro from './intro';
import Calendar from './calendar';
import WeatherIcon from './weather_icon';
import CityWeatherData from './city_weather_data';

import CardWrapper from '../styled/card_wrapper';
import Card from '../styled/card';
import IntroContainer from '../styled/intro_container';
import SearchBarContainer from '../styled/search_bar_container';
import CityListContainer from '../styled/city_list_container';
import CalendarContainer from '../styled/calendar_container';
import ResultsDataContainer from '../styled/results_data_container';

const IntroCard = (props) => {
  return (
		<CardWrapper>
    	<Card>
				< IntroContainer className='intro-card'>
					< Intro/>
				</IntroContainer>
				< SearchBarContainer className='search-card'>
					< SearchBar query={props.query} updateSuggestedCities={props.updateSuggestedCities}/>
				</SearchBarContainer>
				< CityListContainer className='suggested-cities-card'>
					< CityList suggestedCities={props.suggestedCities} updateSelectedCity={props.updateSelectedCity}/>
				</CityListContainer>
				< CalendarContainer className='calendar-card'>
					< Calendar updateSelectedBirthDate={props.updateSelectedBirthDate} updateCityInfo={props.updateCityInfo}/>
				</CalendarContainer>
				< ResultsDataContainer className='results-data-card'>
					< WeatherIcon cityWeatherIcon={props.cityWeatherIcon}/>
        	< CityWeatherData cityData={props.cityData}/>
				</ResultsDataContainer>
    	</Card>
		</CardWrapper>
  );
}

export default IntroCard;



