import anime from 'animejs/lib/anime.es.js';

const showTitle = (title) => {
  const titleClass = title.className.split(" ").pop();
  title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  title.style.fontSize = '48px'
	
  anime.timeline()
  .add({
    targets: `.${titleClass} .letter`,
    opacity: [0,1],
    easing: "easeInQuart",
    duration: 1000,
    delay: (el, i) => 20 * (i+1)
  });
}

const hideTitle = (title) => {
  const titleClass = title.className.split(" ").pop();
  title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	
  anime.timeline()
  .add({
    targets: `.${titleClass} .letter`,
    opacity: [1,0],
    easing: "easeInQuart",
    duration: 20,
    delay: (el, i) => 20 * (i+1)
  });
}

export { showTitle, hideTitle };
