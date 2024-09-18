import {showLesson} from "./modules/show-lesson.js";
import {startTimer} from "./modules/timer.js";
import {currentDay} from "./modules/about-data.js";
import {showAccordion} from "./modules/show-answer.js";
import { scrollUp } from "./modules/arrow-scroll.js";

showLesson();
startTimer();
showAccordion();
window.onscroll = scrollUp();