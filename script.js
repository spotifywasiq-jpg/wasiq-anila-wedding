/* =========================
   Scroll Reveal Animation
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* =========================
   Countdown Timer
========================= */

const targetDate = new Date("November 13, 2026 18:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "THE CELEBRATION HAS BEGUN";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
    days + " DAYS • " +
    hours + " HOURS • " +
    minutes + " MINUTES • " +
    seconds + " SECONDS";

}, 1000);