const animateIntroCard = () => {
  const frame = document.querySelector('.intro-card');
  frame.classList.toggle("intro-card__visible");
}

const animateCalendarCard = () => {
  const frame = document.querySelector('.calendar-card');
  frame.classList.toggle("calendar-card__visible");
}

const animateSearchCard = () => {
  const frame = document.querySelector('.search-card');
  frame.classList.toggle("search-card__visible");
}

const animateSuggestedCities = () => {
  const frame = document.querySelector('.suggested-cities-card');
  frame.classList.toggle("suggested-cities-card__visible");
}

const animateResultsCard = () => {
  const frame = document.querySelector('.results-data-card');
  frame.classList.toggle("results-data-card__visible");
  console.log('animateResultsCard')
}

const resetFrames = () => {
  animateCalendarCard();

  animateResultsCard();
} 

export { 
  animateIntroCard,
  animateCalendarCard,
  animateSearchCard,
  animateSuggestedCities,
  animateResultsCard,
  resetFrames
};