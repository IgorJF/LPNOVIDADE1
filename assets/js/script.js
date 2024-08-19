// Contagem regressiva
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
let countdownTime = 600; // 10 minutos (600 segundos)

function updateCountdown() {
    const days = Math.floor(countdownTime / (60 * 60 * 24));
    const hours = Math.floor((countdownTime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((countdownTime % (60 * 60)) / 60);
    const seconds = countdownTime % 60;

    // Format the countdown with leading zeros
    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    daysElement.textContent = formattedDays;
    hoursElement.textContent = formattedHours;
    minutesElement.textContent = formattedMinutes;
    secondsElement.textContent = formattedSeconds;

    countdownTime--;

    if (countdownTime >= 0) {
        setTimeout(updateCountdown, 1000);
    } else {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    }
}

updateCountdown();


