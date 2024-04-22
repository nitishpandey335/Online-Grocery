const holiDate = new Date("March 17, 2025 00:00:00").getTime();
const endDate = holiDate + (5 * 60 * 60 * 1000); // Set end date to 15 days after Holi
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
        clearInterval(countdown);
        document.querySelector('.sale-heading').innerText = "Holi Sale is Over";
        document.querySelector('.countdown-container').style.display = "none";
        return;
    }

   const days = Math.floor(distance / (1000 * 60 * 60*120));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated values
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("mins").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);
