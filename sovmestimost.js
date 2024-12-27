const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
// Populate day, month, and year options dynamically for all sets
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

  // Months (1-12)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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
