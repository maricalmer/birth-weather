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

const CardWrapper = (props) => {
  return (
		<Container $relative>
    	<Card>
				< Container $top_full_width className='intro-frame intro-frame__visible'>
					< Intro/>
				</Container>
				< Container className='calendar-section'>
					< Calendar updateSelectedBirthDate={props.updateSelectedBirthDate}/>
				</Container>
				< Container className='search-bar'>
					< SearchBar query={props.query} updateSuggestedCities={props.updateSuggestedCities}/>
				</Container>
				< Container className='suggested-cities-section'>
					< CityList suggestedCities={props.suggestedCities} updateSelectedCity={props.updateSelectedCity} updateCityInfo={props.updateCityInfo}/>
				</Container>
				< div className='results-data-section'>
					< Container $space_around>
						< WeatherIcon cityWeatherIcon={props.cityWeatherIcon}/>
        		< CityWeatherData cityData={props.cityData} selectedCity={props.selectedCity}/>
					</Container>
					< BackButtonWrapper updateSelectedCity={props.updateSelectedCity} updateSelectedBirthDate={props.updateSelectedBirthDate}  updateSuggestedCities={props.updateSuggestedCities}/>
					<p className="data-reference">data provided by Open-Meteo and Copernicus ERA5 initiative</p>
				</div>
    	</Card>
		</Container>
  );
}

export default CardWrapper;



