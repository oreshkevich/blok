const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.picture-slider-dots',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.picture__slider-next',
    prevEl: '.picture__slider-prev',
  },
});
