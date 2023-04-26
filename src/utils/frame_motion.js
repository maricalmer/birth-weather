const hideIntroCard = () => {
  const frame = document.querySelector('.intro-card');
  frame.classList.add("intro-card__animated--fade-out");
  setTimeout(() => {
    frame.classList.add("intro-card__animated--move-out");
  }, 1000);
}

const showCalendarCard = () => {
  const frame = document.querySelector('.calendar-card');
  frame.classList.add("calendar-card__animated--in");
}

const hideCalendarCard = () => {
  const frame = document.querySelector('.calendar-card');
  frame.classList.add("calendar-card__animated--fade-out");
  setTimeout(() => {
    frame.classList.add("calendar-card__animated--move-out");
  }, 1000);
}

const showSearchCard = () => {
  const frame = document.querySelector('.search-card');
  frame.classList.add("search-card__animated--in");
}

const hideSearchCard = () => {
  const frame = document.querySelector('.search-card');
  frame.classList.add("search-card__animated--fade-out");
  setTimeout(() => {
    frame.classList.add("search-card__animated--move-out");
  }, 1000);
}

const hideSuggestedCities = () => {
  const frame = document.querySelector('.suggested-cities-card');
  frame.classList.add("suggested-cities-card__animated--fade-out");
  setTimeout(() => {
    frame.classList.add("suggested-cities-card__animated--move-out");
  }, 1000);
}

const showResultsCard = () => {
  const frame = document.querySelector('.results-data-card');
  frame.classList.add("results-data-card__animated--in");
}

const hideResultsCard = () => {
  const frame = document.querySelector('.results-data-card');
  frame.classList.add("results-data-card__animated--fade-out");
  setTimeout(() => {
    frame.classList.add("results-data-card__animated--move-out");
  }, 1000);
}

const resetFrames = () => {
  const calendar = document.querySelector('.calendar-card');
  calendar.classList.remove("calendar-card__animated--fade-out", "calendar-card__animated--move-out");
  const search = document.querySelector('.search-card');
  search.classList.remove("search-card__animated--in", "search-card__animated--fade-out", "search-card__animated--move-out");
  const suggestedCities = document.querySelector('.suggested-cities-card');
  suggestedCities.remove("suggested-cities-card__animated--fade-out", "suggested-cities-card__animated--move-out");
  const results = document.querySelector('.results-data-card');
  results.remove("results-data-card__animated--in", "results-data-card__animated--fade-out", "results-data-card__animated--move-out");
} 

export { 
  hideIntroCard,
  showSearchCard,
  hideSuggestedCities,
  hideSearchCard,
  showCalendarCard,
  hideCalendarCard,
  showResultsCard,
  hideResultsCard,
  resetFrames
};