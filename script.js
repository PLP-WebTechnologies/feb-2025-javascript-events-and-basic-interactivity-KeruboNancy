// 🎨 Interactive Button
const colorBtn = document.getElementById("colorButton");
const secretMsg = document.getElementById("secretMessage");

colorBtn.addEventListener("click", () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  colorBtn.style.backgroundColor = randomColor;
});

colorBtn.addEventListener("dblclick", () => {
  secretMsg.classList.remove("hidden");
  setTimeout(() => secretMsg.classList.add("hidden"), 3000);
});

// 🖼️ Image Gallery
function changeImage(element, newSrc) {
  element.src = newSrc;
}

// 🗂️ Tabs
function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

// 📝 Form Validation
function validateForm(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (name === "") {
    feedback.textContent = "Name cannot be empty!";
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return false;
  }

  if (password.length < 8 && password !== "") {
    feedback.textContent = "Password must be at least 8 characters.";
    return false;
  }

  feedback.textContent = "Form submitted successfully! 🎉";
  feedback.style.color = "pink";

  // Optional: Reset form after successful validation
  setTimeout(() => {
    document.getElementById("myForm").reset();
    feedback.textContent = "";
  }, 2000);

  return true;
}