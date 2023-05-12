import React from 'react';

import SearchBar from './search_bar';
import CityList from './city_list';
import Intro from './intro';
import Calendar from './calendar';
import WeatherIcon from './weather_icon';
import CityWeatherData from './city_weather_data';
import BackButtonWrapper from './back_button_wrapper';

import Card from '../styled/cards/card';
import Container from '../styled/containers/container';
import ResultsContainer from '../styled/containers/results_container';
import CalendarContainer from '../styled/containers/calendar_container';
import SuggestedCitiesContainer from '../styled/containers/suggested_cities_container';

const CardWrapper = (props) => {
  return (
		<Container $relative>
    	<Card>
				< Container $top_full_width className='intro-frame intro-frame__visible'>
					< Intro/>
				</Container>
				< CalendarContainer className='calendar-section'>
					< Calendar updateSelectedBirthDate={props.updateSelectedBirthDate}/>
				</CalendarContainer>
				< Container className='search-bar'>
					< SearchBar query={props.query} updateSuggestedCities={props.updateSuggestedCities}/>
				</Container>
				< SuggestedCitiesContainer className='suggested-cities-section'>
					< CityList suggestedCities={props.suggestedCities} updateSelectedCity={props.updateSelectedCity} updateCityInfo={props.updateCityInfo}/>
				</SuggestedCitiesContainer>
				< div className='results-data-section'>
					< ResultsContainer>
						< WeatherIcon cityWeatherIcon={props.cityWeatherIcon}/>
        		< CityWeatherData cityData={props.cityData} selectedCity={props.selectedCity}/>
					</ResultsContainer>
					< BackButtonWrapper updateSelectedCity={props.updateSelectedCity} updateSelectedBirthDate={props.updateSelectedBirthDate}  updateSuggestedCities={props.updateSuggestedCities}/>
					<p className="data-reference">data provided by Open-Meteo and Copernicus ERA5 initiative</p>
				</div>
    	</Card>
		</Container>
  );
}

export default CardWrapper;



