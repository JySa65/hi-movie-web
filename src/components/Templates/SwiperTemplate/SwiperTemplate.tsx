import { Swiper, SwiperSlide } from 'swiper/react';
import swiperConfig from '@src/utils/swiperConfig';
import { Poster } from '@src/components/Organisms';

import type { Movie } from '@src/Interfaces/movies';
import { Link } from 'react-router-dom';

interface ISwiperTemplate {
  title: string;
  datas: Movie[];
  autoPlayDelay: number;
  to: string;
}

const SwiperTemplate = ({ datas, title, to, autoPlayDelay = 3000 }: ISwiperTemplate): JSX.Element => {
  return (
    <div className="my-10 px-2">
      <h2 className="text-white pb-2 pl-5 text-lg font-bold">{title}</h2>
      <Swiper {...swiperConfig(autoPlayDelay)}>
        {datas.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to={`${to}/${String(data.id)}`}>
                <Poster data={data} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperTemplate;
