const hoursElement = document.querySelector('.time_hour');
const minutesElement = document.querySelector('.time_minute');
const secondsElement = document.querySelector('.time_seconds');

export function startTimer() {
  // Function to start the countdown
  function countdown() {
    // Set the duration for 30 minutes in milliseconds
    const duration = 30 * 60 * 1000; // 30 minutes in milliseconds

    // Get the current time in milliseconds
    const now = new Date().getTime();

    // Set the target time to 30 minutes from now
    const targetTime = now + duration;

    const interval = setInterval(() => {
      // Get the current time again
      const currentTime = new Date().getTime();

      // Calculate the remaining time in milliseconds
      let remainingTime = targetTime - currentTime;

      // Check if the time is up
      if (remainingTime <= 0) {
        clearInterval(interval);
        countdown(); // Restart the timer
        return;
      }

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

  countdown(); // Start the first countdown
}