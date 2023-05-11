import animateCard from '../utils/frame_motion';
import { showTitle, hideTitle } from '../utils/title_motion';

const restartCycle = () => {
  animateCard("calendar-section");
  animateCard("results-data-section");
  const resultsTitle = document.querySelector('.results-title-anime-js');
  const whatDateTitle = document.querySelector('.what-date-title-anime-js');
  hideTitle(resultsTitle);
  showTitle(whatDateTitle);
}

export default restartCycle;