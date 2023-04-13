import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import type { Movie } from '@Interfaces/movies';
import { SummaryMovie } from '@Organisms/index';
import { SwiperTemplate } from '@Templates/index';

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
              <SummaryMovie movie={movie} showMore />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperTemplate to={'/detail'} datas={popularMovies} title="Peliculas Populares" autoPlayDelay={3000} />
      <SwiperTemplate to={'/detail-tv'} datas={popularTV} title="TV Populare" autoPlayDelay={3500} />
    </>
  );
};

export default Main;
