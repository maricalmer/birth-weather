import React from 'react';

import SearchBar from './search_bar';
import CityList from './city_list';
import Intro from './intro';
import Calendar from './calendar';
import WeatherIcon from './weather_icon';
import CityWeatherData from './city_weather_data';
import BackButtonContainer from './back_button_container';

import CardWrapper from '../styled/card_wrapper';
import Card from '../styled/card';
import IntroContainer from '../styled/intro_container';
import SearchBarContainer from '../styled/search_bar_container';
import SuggestedCitiesContainer from '../styled/suggested_cities_container';
import CalendarContainer from '../styled/calendar_container';
import WeatherDataContainer from '../styled/weather_data_container';

const CardContainer = (props) => {
  return (
		<CardWrapper>
    	<Card>
				< IntroContainer className='intro-frame intro-frame__visible'>
					< Intro/>
				</IntroContainer>
				< CalendarContainer className='calendar-section'>
					< Calendar updateSelectedBirthDate={props.updateSelectedBirthDate}/>
				</CalendarContainer>
				< SearchBarContainer className='search-bar'>
					< SearchBar query={props.query} updateSuggestedCities={props.updateSuggestedCities}/>
				</SearchBarContainer>
				< SuggestedCitiesContainer className='suggested-cities-section'>
					< CityList suggestedCities={props.suggestedCities} updateSelectedCity={props.updateSelectedCity} updateCityInfo={props.updateCityInfo}/>
				</SuggestedCitiesContainer>
				< div className='results-data-section'>
					< WeatherDataContainer>
						< WeatherIcon cityWeatherIcon={props.cityWeatherIcon}/>
        		< CityWeatherData cityData={props.cityData} selectedCity={props.selectedCity}/>
					</WeatherDataContainer>
					< BackButtonContainer updateSelectedCity={props.updateSelectedCity} updateSelectedBirthDate={props.updateSelectedBirthDate}  updateSuggestedCities={props.updateSuggestedCities}/>
				</div>
    	</Card>
		</CardWrapper>
  );
}

export default CardContainer;



