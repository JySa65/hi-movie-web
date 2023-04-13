import { Link } from 'react-router-dom';

import type { Movie, MovieDetail } from '@Interfaces/movies';
import { PosterImage } from '@Molecules/index';

interface ISummaryMovie {
  movie: Movie | MovieDetail;
  showMore: boolean;
}

const SummaryMovie = ({ movie, showMore = false }: ISummaryMovie): JSX.Element => {
  return (
    <div className="h-screen relative">
      {Boolean(movie.backdrop_path) && (
        <picture className="absolute w-full h-full md:h-screen opacity-[0.15]">
          <img
            className="object-cover w-full h-full"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path as string}`}
            alt="backdrop_path"
          />
        </picture>
      )}

      <div className="z-1 w-full absolute top-[80px] h-[calc(100%-100px)] ">
        <div className="grid grid-area-template">
          <div className="poster">
            <PosterImage path={movie.poster_path} className="h-[35vh] md:h-[65vh]" />
          </div>

          <h2 className="text-white title font-bold text-[6vw] md:text-7xl">{movie.title}</h2>

          <div className="text-white flex items-start info-plus">
            <h3 className="flex items-center">
              <span className="bg-red-primary h-[10px] w-[10px] rounded mr-2" /> {movie.original_title}
            </h3>
            <p className="flex items-center">
              <span className="bg-red-primary h-[10px] w-[10px] rounded mr-2" />
              {new Date(movie.release_date).getFullYear()}
            </p>

            <div className="flex items-center">
              <span className="bg-red-primary h-[10px] w-[10px] rounded mr-2" /> {movie.vote_average}
              /10
            </div>
          </div>

          <div className="actions">
            {showMore && (
              <Link
                to={`detail/${movie.id as number}`}
                className=" text-white mt-6 bg-red-primary rounded-3xl font-semibold px-5 py-1 "
              >
                <span>Leer mas ...</span>
              </Link>
            )}
          </div>
          <p className="text-white t text-justify overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryMovie;
