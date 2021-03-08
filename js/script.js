const link = document.querySelector(".contacts__button");
const modal = document.querySelector(".feedback");
const close = document.querySelector(".feedback__close");
const linkmap = document.querySelector(".contacts__map");
const fullmap = document.querySelector(".map");
const closemap = document.querySelector(".map__close");
const login = modal.querySelector("[name=name]");
const formfeedback = modal.querySelector(".feedback__form");
const email = modal.querySelector("[name=email]");
const bulletsContainer = document.querySelector(".slider__controls");
const bullets = document.querySelectorAll(".slider__bullet");
const slides = document.querySelectorAll(".slider__slide");
const servicesContainer = document.querySelector(".service__col-left");
const servicesControls = document.querySelectorAll(".service__button");
const servicesSlides = document.querySelectorAll(".service__slide");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

linkmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  fullmap.classList.add("modal-show");
});

closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  fullmap.classList.remove("modal-show");
});

formfeedback.addEventListener("submit", function (evt) {
  if (!login.value && !email.value) {
    evt.preventDefault();
    modal.classList.add("modal-error");
  }
});

bulletsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("slider__bullet")) return;

  bullets.forEach((bullet) =>
    bullet.classList.remove("slider__bullet--active")
  );

  e.target.classList.add("slider__bullet--active");

  slides.forEach((slide) => slide.classList.remove("slider__slide--active"));

  slides[e.target.dataset.number].classList.add("slider__slide--active");
});

servicesContainer.addEventListener("click", function (e) {
  if (e.target.tagName != "BUTTON") return;

  servicesControls.forEach((button) =>
    button.classList.remove("service__button--active")
  );

  e.target.classList.add("service__button--active");

  servicesSlides.forEach((slide) =>
    slide.classList.remove("service__slide--active")
  );

  servicesSlides[e.target.dataset.number].classList.add(
    "service__slide--active"
  );
});
