const targetDate = new Date("November 13, 2026 00:00:00").getTime();

const timer = setInterval(function() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("timer").innerHTML =
        days + " Days • " + hours + " Hours • " + minutes + " Minutes";

}, 1000);