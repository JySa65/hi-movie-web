import { Poster } from '@Organisms/index';
import { useAppSelector } from '@src/hooks';
import { Link } from 'react-router-dom';

const Movies = (): JSX.Element => {
  const movies = useAppSelector((state) => state.movies.popularMovies);

  return (
    <div className="flex flex-wrap justify-around items-center py-[100px] px-11">
      {movies.map((movie) => (
        <Link to={`/detail/${String(movie.id)}`} key={movie.id} className="m-5">
          <Poster data={movie} />
        </Link>
      ))}
    </div>
  );
};

export default Movies;
