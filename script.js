document.addEventListener("DOMContentLoaded", () => {
  // Tabs functionality
  function openTab(evt, tabName) {
    const tabs = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

  window.openTab = openTab;

  // Image slider setup
  const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
  ];

  let slideIndex = 0;

  const slideImg = document.getElementById("slide");

  // Show initial image
  if (slideImg) {
    slideImg.src = images[slideIndex];
  }

  // Next image
  window.nextSlide = function () {
    if (!slideImg) return;

    slideIndex++;

    if (slideIndex < images.length) {
      slideImg.src = images[slideIndex];
    } else {
      alert("Surprise! You've viewed all the slides 🎉");
      slideIndex = images.length - 1; // lock at last image
    }
  };

  // Previous image
  window.prevSlide = function () {
    if (!slideImg) return;

    if (slideIndex > 0) {
      slideIndex--;
      slideImg.src = images[slideIndex];
    }
  }

  // Button Click & Hover Effects
  const exploreBtn = document.getElementById("exploreBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      alert("You're on your way to discovering your inner strength!");
    });

    exploreBtn.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#e91e63";
    });

    exploreBtn.addEventListener("mouseout", (e) => {
      e.target.style.backgroundColor = "#f50057";
    });
  }

  // Keypress Detection
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      alert("You pressed Enter! Ready to dive in?");
    }
  });

  // Double Click Bonus
  document.body.addEventListener("dblclick", () => {
    alert("Double click detected! You're full of energy today 💫");
  });

  // Form Validation
  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const feedback = document.getElementById("feedback");

      let isValid = true;
      feedback.textContent = "";

      if (!name) {
        feedback.textContent += "Please enter your name.\n";
        isValid = false;
      }

      if (
        !email ||
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ) {
        feedback.textContent += "Please enter a valid email address.\n";
        isValid = false;
      }

      if (isValid) {
        alert("Thank you for booking! We'll be in touch soon.");
        this.reset();
      }
    });
  }
});