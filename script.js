document.addEventListener("DOMContentLoaded", function() {
    // Your existing JavaScript code here

    var typed = new Typed(".text", {
        strings: ["Frontend Development", "Backend Development", "Web Designing", "Android Development","Web Development"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
        loop: true
    });

    const menuIcon = document.getElementById("menu");
    const navbar = document.querySelector("header .navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("nav-toggle");
    });
});