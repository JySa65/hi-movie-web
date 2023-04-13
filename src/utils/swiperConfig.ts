import { Navigation, Autoplay } from 'swiper';

export default function swiperConfig(autoplayDelay: number): Record<string, any> {
  return {
    slidesPerView: 1,
    loop: true,
    modules: [Navigation, Autoplay],
    effect: 'fade' as any,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      },
      1280: {
        slidesPerView: 5
      },
      1536: {
        slidesPerView: 6
      }
    },
    autoplay: {
      delay: autoplayDelay,
      disableOnInteraction: true
    }
  };
}
