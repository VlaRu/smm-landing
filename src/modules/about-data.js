const dateElement = document.querySelector('.about-start_date');
export let currentDay = new Date().getDate();
export let currentMounth = new Date().getMonth();
let mounth = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
dateElement.innerHTML = `${currentDay + 1} ${mounth[currentMounth]}`;
