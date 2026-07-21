// ================================
// Our Little Life - Version 3
// ================================

// Navigate to dashboard
const enterBtn = document.getElementById("enterBtn");
const heroBtn = document.querySelector(".hero-button");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        window.location.href = "dashboard.html";
    });
}

if (heroBtn) {
    heroBtn.addEventListener("click", () => {
        window.location.href = "dashboard.html";
    });
}

// Relationship Counter
const relationshipDate = new Date("2025-10-10T00:00:00");
const daysTogether = document.getElementById("daysTogether");

if (daysTogether) {

    const today = new Date();

    const difference =
        today.getTime() - relationshipDate.getTime();

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    if (days >= 0) {

        daysTogether.innerHTML =
            `❤️ ${days} beautiful day${days !== 1 ? "s" : ""} together`;

    } else {

        const remaining = Math.abs(days);

        daysTogether.innerHTML =
            `❤️ ${remaining} day${remaining !== 1 ? "s" : ""} until October 10, 2025`;

    }

}

// Greeting
const greeting = document.querySelector(".welcome h1");

if (greeting) {

    const hour = new Date().getHours();

    let message = "Good Evening";

    if (hour < 12) {

        message = "Good Morning";

    } else if (hour < 18) {

        message = "Good Afternoon";

    }

    greeting.innerHTML = `${message},<br><span>Bebe ❤️</span>`;

}

// Feature Cards
const cards = document.querySelectorAll(".feature-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const title = card.querySelector("h3").textContent;

        alert(`${title} is coming soon ❤️`);

    });

});

// Memory Cards Hover Effect
const memoryCards = document.querySelectorAll(".card");

memoryCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});
