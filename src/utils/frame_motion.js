const animateCard = (cardClass) => {
  const frame = document.querySelector(`.${cardClass}`);
  frame.classList.toggle(`${cardClass}__visible`);
}

export default animateCard;
