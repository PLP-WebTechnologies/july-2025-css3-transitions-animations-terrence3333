// DARK MODE TOGGLE
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// BOX ANIMATION
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
});

// FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(name === "" || email === "" || password === "") {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
    return;
  }

  if(!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address!";
    formMessage.style.color = "red";
    return;
  }

  if(password.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters!";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
  contactForm.reset();
});
