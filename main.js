var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  spaceBetween: 400,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// counters
function animateCounter(counter, target, duration) {
  let start = 0;
  const increment = target / (duration / 100);
  const interval = setInterval(() => {
    start += increment;
    if (start >= target) {
      counter.innerText = target;
      clearInterval(interval);
    } else {
      counter.innerText = Math.floor(start);
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const duration = 4000; // 5 seconds

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    animateCounter(counter, target, duration);
  });
});
