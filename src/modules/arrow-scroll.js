let scrollToTopBtn = document.querySelector('.up-arrow');

export function scrollUp() {
  if (!scrollToTopBtn) return;

  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
      scrollToTopBtn.classList.add("show");
  } else {
      scrollToTopBtn.classList.remove("show");
  }
}

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
