import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import type { Movie } from '@Interfaces/movies';
import { SummaryMovie, Poster } from '@Organisms/index';

import './styles.css';

interface IMain {
  movies: Movie[];
  popularMovies: Movie[];
  popularTV: Movie[];
}

const Main = ({ movies, popularMovies, popularTV }: IMain): JSX.Element => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 60,
          stretch: 50,
          depth: 50,
          slideShadows: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
      >
        {movies.map((movie, index) => {
          const key = `${String(movie.id)}-${index}`;
          return (
            <SwiperSlide key={key}>
              <SummaryMovie movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="my-10 px-2">
        <h2 className="text-white pb-2 pl-5 text-lg font-bold">Peliculas Populares</h2>
        <Swiper
          slidesPerView={5}
          loop={true}
          modules={[Navigation, Autoplay]}
          effect="fade"
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true
          }}
        >
          {popularMovies.map((movie, index) => {
            const key = `${String(movie.id)}-${index}`;
            return (
              <SwiperSlide key={key}>
                <Poster data={movie} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="my-10 px-2">
        <h2 className="text-white pb-2 pl-5 text-lg font-bold">TV Populares</h2>
        <Swiper
          slidesPerView={5}
          loop={true}
          modules={[Navigation, Autoplay]}
          effect="fade"
          spaceBetween={20}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true
          }}
        >
          {popularTV.map((tv, index) => {
            const key = `${String(tv.id)}-${index}`;
            return (
              <SwiperSlide key={key}>
                <Poster data={tv} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Main;
