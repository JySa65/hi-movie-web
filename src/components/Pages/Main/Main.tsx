import { useAppSelector, useRequest } from '@Hooks/index';
import { MainTemplate } from '@Templates/index';
import { getPopularMovies, getPopularTV } from '@Data/actions';

const Main = (): JSX.Element => {
  const movies = useAppSelector((state) => state.movies.movies || []);
  const { data: popularMovies = [] } = useRequest(getPopularMovies);
  const { data: popularTV = [] } = useRequest(getPopularTV);

  return (
    <>
      <MainTemplate movies={movies} popularMovies={popularMovies} popularTV={popularTV} />
    </>
  );
};

export default Main;
