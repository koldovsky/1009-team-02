function countdown(date) {
  const targetTime = new Date(date).getTime();
  const countdownContainer = document.querySelector(".countdown");

  const interval = setInterval(() => {
    const currentTime = new Date().getTime();
    const remainingTime = targetTime - currentTime;
    if (remainingTime <= 0) {
      clearInterval(interval);
      countdownContainer.textContent = "Sale ended!";
    } else {
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      countdownContainer.innerHTML = `<div class="countdown__date">
        <span class="countdown__date-text">Time is running out: Don't miss the sale in</span>
        <span class="countdown__date-item">${days}:${hours}:${minutes}:${seconds}</span>
        <span class="countdown__icon-container"><img src="img/sale-icon.png" alt="Sale icon"></span>
        </div>`;
    }
  }, 1000);
}

const targetDate = "2023-06-15";
countdown(targetDate);