const hoursElement = document.querySelector('.time_hour');
const minutesElement = document.querySelector('.time_minute');
const secondsElement = document.querySelector('.time_seconds');

export function startTimer() {
  function countdown() {

    const duration = 30 * 60 * 1000;

    const now = new Date().getTime();

    const targetTime = now + duration;

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();

      let remainingTime = targetTime - currentTime;

      if (remainingTime <= 0) {
        clearInterval(interval);
        countdown();
        return;
      }

      let hours = Math.floor(remainingTime / (1000 * 60 * 60));
      let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      hoursElement.textContent = String(hours).padStart(2, '0');
      minutesElement.textContent = String(minutes).padStart(2, '0');
      secondsElement.textContent = String(seconds).padStart(2, '0');
    }, 1000);
  }

  countdown();
}