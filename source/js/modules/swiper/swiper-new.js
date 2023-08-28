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
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
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
    speed: 900,
    breakpoints: {
      1200: {
        slidesPerView: 1,
        spaceBetween: 5000,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 5000,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 5000,
      },
    },
  });

  trainersSwiper.enable();
  reviewsSwiper.enable();
};
