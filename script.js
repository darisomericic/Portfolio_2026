const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
// 1. Select all links inside your nav menu
const navLinks = document.querySelectorAll("#nav-menu a");

// 2. Loop through each link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // 3. Remove the 'active' class to hide the menu
        navMenu.classList.remove("active");
    });
});

document.getElementById('year').textContent = new Date().getFullYear();