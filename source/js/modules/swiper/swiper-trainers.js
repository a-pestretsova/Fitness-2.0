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
  });
  trainersSwiper.enable();
};
