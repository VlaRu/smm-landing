// Устанавливаем время обратного отсчета в минутах
//let countdownMinutes = 1;

// Преобразуем минуты в секунды
//let countdownSeconds = countdownMinutes * 60;

// Получаем ссылки на HTML-элементы таймера
// let hourElement = document.querySelector('.time_hour');
// let minuteElement = document.querySelector('.time_minute');
// let secondElement = document.querySelector('.time_seconds');

// // Функция обновления значений времени на странице
// export function updateTimer() {
//     // Рассчитываем оставшееся время
//     let hours = Math.floor(countdownSeconds / 3600);
//     let minutes = Math.floor((countdownSeconds % 3600) / 60);
//     let seconds = countdownSeconds % 60;

//     // Обновляем значения времени на странице
//     hourElement.textContent = hours;
//     minuteElement.textContent = minutes;
//     secondElement.textContent = seconds;

//     // Уменьшаем оставшееся время на 1 секунду
//     countdownSeconds--;

//     // Проверяем, достигнуто ли время окончания таймера
//     if (countdownSeconds < 0) {
//         clearInterval(countdownInterval);
//     }

//     /* if (countdownSeconds < 0) {
//       // Обнуляем значения времени
//       countdownSeconds = countdownMinutes * 60;
//       hourElement.textContent = 0;
//       minuteElement.textContent = 0;
//       secondElement.textContent = 0;
//   } */
// }

// Запускаем таймер обратного отсчета
export function startTimer() {
  // Get the current time in milliseconds
  const now = new Date().getTime();

  // Set the target time (e.g., 24 hours from now)
  const targetTime = now + 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const hoursElement = document.querySelector('.time_hour');
  const minutesElement = document.querySelector('.time_minute');
  const secondsElement = document.querySelector('.time_seconds');

  const interval = setInterval(() => {
    // Get the current time again
    const currentTime = new Date().getTime();

    // Calculate the remaining time in milliseconds
    let remainingTime = targetTime - currentTime;

    // Calculate hours, minutes, and seconds
    let hours = Math.floor(remainingTime / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update the timer display
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');

  }, 1000);
}
