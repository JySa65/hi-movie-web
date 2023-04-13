import { Poster } from '@Organisms/index';
import { useAppSelector } from '@src/hooks';
import { Link } from 'react-router-dom';

function TVShow(): JSX.Element {
  const tvs = useAppSelector((state) => state.movies.tv);

  return (
    <div className="flex flex-wrap justify-around items-center py-[100px] px-11">
      {tvs.map((tv) => (
        <Link to={`/detail-tv/${String(tv.id)}`} key={tv.id} className="m-5">
          <Poster data={tv} />
        </Link>
      ))}
    </div>
  );
}

export default TVShow;
