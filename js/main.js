const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// when we click on hamburger icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
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

const reviewsData = [
  {
    name: "Алексей Стрельцов",
    age: "57 лет",
    text: "Хочу поблагодарить чудесную Алёну Стрельцову, за прекрасную атмосферу созданную ею во время работы. За знания, отношение…",
    imgSrc: "assets/imgplaceholder.png",
  },
  {
    name: "Сергей Владимирович",
    age: "41 лет",
    text: "Сергей Владимирович, сильнейший экстрасенс и ясновидящий мира. Уникальный человек, просто бриллиант Сервиса Астро7.",
    imgSrc: "assets/imgplaceholder.png",
  },
  {
    name: "Арина",
    age: "41 лет",
    text: "Лаура — прекрасный эксперт. Увидела всю ситуацию в настоящем и обозначила перспективы на будущее. Благодарю!",
    imgSrc: "assets/imgplaceholder.png",
  },
  {
    name: "Аня",
    age: "56 лет",
    text: "Эльвире Максвелл, спасибо большое! Настолько проникновенно работает, можно сказать возвращает состояние души после всего…",
    imgSrc: "assets/imgplaceholder.png",
  },
  {
    name: "Ольга",
    age: "52 лет",
    text: "Ольга, эксперт в своем деле, помогла мне увидеть многие важные моменты, которые я не замечала ранее.",
    imgSrc: "assets/imgplaceholder.png",
  },
];

// Get the reviews container element
const reviewsContainer = document.querySelector(".reviews-container");

// Function to create a review card
const createReviewCard = (review) => {
  const card = document.createElement("div");
  card.classList.add("review-card");

  const cardContent = `
    <div class="review-header">
      <img src="${review.imgSrc}" alt="Reviewer Image" class="reviewer-img" />
      <div class="reviewer-info">
        <h3 class="reviewer-name">${review.name}</h3>
        <p class="reviewer-age">${review.age}</p>
      </div>
    </div>
    <p class="review-text">${review.text}</p>
  `;

  card.innerHTML = cardContent;
  return card;
};

// Loop through the reviews data and add each review to the container
reviewsData.forEach((review) => {
  const reviewCard = createReviewCard(review);
  reviewsContainer.appendChild(reviewCard);
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

// Loop through each header and add a click event
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling; // Get the corresponding content div
    const icon = header.querySelector(".accordion-icon");
    // Toggle the display of the content
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.textContent = "+";
    } else {
      // Hide all other content sections
      const allContents = document.querySelectorAll(".accordion-content");
      allContents.forEach((item) => {
        item.style.display = "none";
        icon.textContent = "+";
      });

      // Show the clicked content
      content.style.display = "block";
      icon.textContent = "–";
    }
  });
});
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

const fadeInElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // If the element is in the viewport, add the respective fade-in class
      if (entry.isIntersecting) {
        // Add the animation class depending on the data attribute
        const animationType = entry.target.getAttribute("data-animation");
        if (animationType === "left") {
          entry.target.classList.add("fade-in-left");
        } else if (animationType === "right") {
          entry.target.classList.add("fade-in-right");
        } else if (animationType === "bottom") {
          entry.target.classList.add("fade-in-bottom");
        }

        observer.unobserve(entry.target); // Stop observing after the animation is triggered
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% of the element is in the viewport

// Observe all fade-in elements
fadeInElements.forEach((element) => {
  observer.observe(element);
});
window.addEventListener("load", () => {
  const spinner = document.getElementById("spinner");
  const content = document.getElementById("content");

  // Hide spinner
  spinner.style.display = "none";

  // Show content
  content.style.display = "block";
});
