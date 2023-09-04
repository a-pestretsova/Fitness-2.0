import Swiper from '../../vendor/swiper.js';

export const newSwiper = () => {
  const trainersSwiper = new Swiper('.trainers__swiper', {
    loop: true,
    grabCursor: 'true',
    autoHeight: true,
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
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });

  const reviewsSwiper = new Swiper('.reviews__swiper', {
    grabCursor: 'true',
    loop: false,
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
      disabledClass: 'my-button-disabled',
      hideOnClick: true,
    },
    mousewheel: false,
    keyboard: true,
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
  });

  trainersSwiper.enable();
  reviewsSwiper.enable();
};
