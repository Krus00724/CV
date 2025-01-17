//slides

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slide.length;
function showNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;  
    }
    const offset = -currentIndex * 100 / totalSlides; 
    slides.style.transform = `translateX(${offset}%)`;
}
setInterval(showNextSlide, 3000);

//darkMode
let darkModus = document.getElementById("darkMode");
let body = document.querySelector("body");
function darkMode() {
    body.classList.toggle("darkMode");
};
darkModus.addEventListener("click",darkMode);

// About section
function redirect() {
    window.location.href = 'file:///Users/krzysztofwiatr/Desktop/projektJava/secondPage.html'; 
}

// Works section 
function redirectBack() {
    window.location.href = 'file:///Users/krzysztofwiatr/Desktop/projektJava/WebsiteProjekt.html'; 
};

// Email
function sendEmail() {
    const recipient = prompt("Please enter the recipient's email:", "example@example.com");
    
    if (recipient) {
        const subject = encodeURIComponent("Hello from JavaScript");
        const body = encodeURIComponent("This is an example email written from a prompt.");

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }
}
