document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".overview-text, .overview-video-box");

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.classList.add("show"); // Add class when in viewport
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once to check elements already in view
});

/* image sliding */

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".target-audience-box");

    function checkScroll() {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                img.classList.add("show"); // Apply animation when in view
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once to check images already in view
});

/* story sliding */
document.addEventListener("DOMContentLoaded", function() {
    const stories = document.querySelectorAll(".story");

    function checkScroll() {
        stories.forEach((story, index) => {
            const rect = story.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                setTimeout(() => {
                    story.classList.add("show"); // Apply animation with a delay for each card
                    story.querySelector("img").classList.add("show"); // Animate images separately
                }, index * 200); // Adds staggered effect
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once to check elements already in view
});

/* explore button js */
function scrollToDemo() {
    document.getElementById("Demo").scrollIntoView({ behavior: "smooth" });
}

/* start now button js */
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
/* mobile view of navbar */
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
    let menu = document.querySelector(".nav-links");
    let hamburger = document.querySelector(".hamburger");

    // Check if the clicked element is NOT inside the menu or hamburger button
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("active");
    }
});

