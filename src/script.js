import {startTimer} from "./modules/timer.js";
import {currentDay} from "./modules/about-data.js";
import {showAccordion} from "./modules/show-answer.js";
import { scrollUp } from "./modules/arrow-scroll.js";
import { burgerMenu, toggleBurgerMenu } from "./modules/burger-menu.js";

startTimer();
showAccordion();
window.addEventListener("scroll", scrollUp);
burgerMenu.addEventListener('click', toggleBurgerMenu);