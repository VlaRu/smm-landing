let scrollToTopBtn = document.querySelector('.up-arrow');

const subtitle = document.querySelector('.for_section-subtitle');
const elementsContainers = document.querySelectorAll('.for-elements');
const resultContainers = document.querySelectorAll('.container_result-text');
const lessonContainers = document.querySelectorAll('.lesson-wrapper');
const resultAfterContainers = document.querySelectorAll('.result-after-text');
const sumAboutElement = document.querySelector('.sum-about');
const timerWrapElement = document.querySelector('.timer-wrap');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleElementAppearance(el) {
  el.forEach((container, i) => {
    setTimeout(()=> {if (isElementInViewport(container)) {
      if( i % 2 !== 0 ){
      container.style.animation = "slideIn 1.5s ease-in-out forwards";
      }else(container.style.animation = "slideInLeft 1.5s ease-in-out forwards")
      }}, i * 300)
  });
}

export function scrollUp() {
  if (!scrollToTopBtn) return;

  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
      scrollToTopBtn.classList.add("show");
  } else {
      scrollToTopBtn.classList.remove("show");
  }

  if (isElementInViewport(sumAboutElement)) {
    sumAboutElement.style.margin = "40px 0";
  }

  if (isElementInViewport(timerWrapElement)) {
    timerWrapElement.style.marginTop = "5px";
  }

  if (isElementInViewport(subtitle)) {
    subtitle.style.animation = "revealText 2s ease-in-out forwards";
  }

  resultAfterContainers.forEach( el => { if(isElementInViewport(el)){ el.style.animation = "visibility 3s ease-in-out forwards"}})

  elementsContainers.forEach(container => {
    setTimeout(()=> { if (isElementInViewport(container)) {container.style.animation = "slideIn 1.5s ease-in-out forwards";}}, 1000)
  });

  handleElementAppearance(resultContainers)
  handleElementAppearance(lessonContainers)
}

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
