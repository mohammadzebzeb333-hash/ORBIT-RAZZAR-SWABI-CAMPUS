const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
const header = document.getElementById("header");
if(window.scrollY > 50){
header.style.background = "#b30000";
}
else{
header.style.background = "#d50000";
}
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Feature + News cards click alert
document.querySelectorAll('.feature-card, .news-card').forEach(card => {
  card.addEventListener('click', () => {
    alert('You selected: ' + card.querySelector('h3').innerText);
  });
});

/* Admission Form Message */
const admissionForm = document.querySelector(".admission form");
if(admissionForm){
admissionForm.addEventListener("submit", function(e){
e.preventDefault();
alert("Thank You! Your admission application has been submitted successfully.");
admissionForm.reset();
});
}

/* News Cards Animation */
const newsCards = document.querySelectorAll(".news-card");
newsCards.forEach(card => {
card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-10px)";
});
card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0)";
});
});

/* Feature Cards Animation */
const featureCards = document.querySelectorAll(".feature-card");
featureCards.forEach(card => {
card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-10px)";
});
card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0)";
});
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const responseMsg = document.getElementById('responseMessage');
  responseMsg.style.color = "#ff0000";
  responseMsg.textContent = "Thank you! Your message has been sent.";
  this.reset();
});