export const burgerMenu = document.querySelector('.burger-menu');
const burgerLines = document.querySelectorAll('.burger-line');
const mainMenu = document.querySelector('.main-menu');
export const container = document.querySelector('.container');

export function toggleBurgerMenu() {
  mainMenu.classList.toggle('menu-open');

  burgerLines[0].classList.toggle('first-active');
  burgerLines[1].classList.toggle('second-active');
  burgerLines[2].classList.toggle('third-active');
  burgerLines[3].classList.toggle('fourth-active');
}


