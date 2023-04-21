import React from 'react';

import SearchBar from './search_bar';
import CityList from './city_list';
import Intro from './intro';

import CardWrapper from '../styled/card_wrapper';
import Card from '../styled/card';
import IntroContainer from '../styled/intro_container';
import SearchBarContainer from '../styled/search_bar_container';
import CityListContainer from '../styled/city_list_container';

const IntroCard = (props) => {
  return (
		<CardWrapper>
    	<Card>
				< IntroContainer>
					< Intro/>
				</IntroContainer>
				< SearchBarContainer>
					< SearchBar query={props.query} updateSuggestedCities={props.updateSuggestedCities}/>
				</SearchBarContainer>
				< CityListContainer>
					< CityList suggestedCities={props.suggestedCities} updateSelectedCity={props.updateSelectedCity}/>
				</CityListContainer>
    	</Card>
		</CardWrapper>
  );
}

export default IntroCard;



