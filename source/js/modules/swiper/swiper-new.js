import Swiper from '../../vendor/swiper.js';

export const newSwiper = () => {
  const trainersSwiper = new Swiper('.trainers__swiper', {
    loop: true,
    grabCursor: 'true',
    navigation: {
      nextEl: '.trainers__btn--next',
      prevEl: '.trainers__btn--prev',
    },
    mousewheel: false,
    keyboard: true,
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    breakpoints: {
      1320: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      850: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      770: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 94,
      },
    },
  });

  const reviewsSwiper = new Swiper('.reviews__swiper', {
    grabCursor: 'true',
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },
    mousewheel: false,
    keyboard: true,
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
  });

  trainersSwiper.enable();
  reviewsSwiper.enable();
};
