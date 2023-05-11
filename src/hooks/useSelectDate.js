import animateCard from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const showCitySearch = () => {
  animateCard("calendar-section");
  animateCard("search-bar");
  animateCard("suggested-cities-section");
  const whatDateTitle = document.querySelector('.what-date-title-anime-js');
  const whatCityTitle = document.querySelector('.what-city-title-anime-js');
  hideTitle(whatDateTitle);
  showTitle(whatCityTitle);
}

export default showCitySearch;