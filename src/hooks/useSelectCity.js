import animateCard from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const showResults = () => {
  animateCard("suggested-cities-section");
  animateCard("search-bar");
  animateCard("results-data-section");
  const whatCityTitle = document.querySelector('.what-city-title-anime-js');
  const resultsTitle = document.querySelector('.results-title-anime-js');
  hideTitle(whatCityTitle);
  showTitle(resultsTitle);
}

export default showResults;