import animateCard from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const showCalendar = () => {
  animateCard("intro-frame");
  animateCard("calendar-section");
  const whatWeatherTitle = document.querySelector('.what-weather-title-anime-js');
  const whatDateTitle = document.querySelector('.what-date-title-anime-js');
  hideTitle(whatWeatherTitle);
  showTitle(whatDateTitle);
}

export default showCalendar;