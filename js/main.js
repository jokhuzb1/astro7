const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
});

window.onload = function () {
  const daySelects = document.querySelectorAll(".day");
  const monthSelects = document.querySelectorAll(".month");
  const yearSelects = document.querySelectorAll(".year");

  // Days (1-31)
  daySelects.forEach((daySelect) => {
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      daySelect.appendChild(option);
    }
  });

  // Months in Russian (1-12)
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  monthSelects.forEach((monthSelect) => {
    months.forEach((month, index) => {
      const option = document.createElement("option");
      option.value = index + 1; // 1-12
      option.text = month;
      monthSelect.appendChild(option);
    });
  });

  // Years (1950-2020)
  for (let i = 1950; i <= 2020; i++) {
    yearSelects.forEach((yearSelect) => {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      yearSelect.appendChild(option);
    });
  }
};
