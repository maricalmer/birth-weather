import React from 'react';

import SearchBar from './search_bar';
import CityList from './city_list';
import Intro from './intro';

import CardWrapper from '../styled/card_wrapper';
import Card from '../styled/card';

const IntroCard = (props) => {
  return (
		<CardWrapper>
    	<Card>
				< Intro/>
				< SearchBar query={props.query} updateSuggestedCities={props.updateSuggestedCities}/>
				< CityList suggestedCities={props.suggestedCities} updateSelectedCity={props.updateSelectedCity}/>
    	</Card>
		</CardWrapper>
  );
}

export default IntroCard;



