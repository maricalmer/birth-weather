const hideIntroCard = () => {
  const frame = document.querySelector('.intro-card');
  frame.classList.add("intro-card__animated--fade-out");
  setTimeout(() => {
    frame.classList.add("intro-card__animated--move-out");
  }, 1000);
}

const showSearchCard = () => {
  const frame = document.querySelector('.search-card');
  frame.classList.add("search-card__animated--in");
}

const hideSearchCard = () => {
  const frame = document.querySelector('.search-card');
  frame.classList.remove("search-card__animated--in");
  frame.classList.add("search-card__animated--out");
}

const hideSuggestedCities = () => {
  const frame = document.querySelector('.suggested-cities-card');
  frame.classList.add("suggested-cities-card__animated--fade-out");
  setTimeout(() => {
    frame.classList.add("suggested-cities-card__animated--move-out");
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

const showResultsCard = () => {
  const frame = document.querySelector('.results-data-card');
  frame.classList.add("results-data-card__animated--in");
}

export { hideIntroCard, showSearchCard, hideSuggestedCities, hideSearchCard, showCalendarCard, hideCalendarCard, showResultsCard };