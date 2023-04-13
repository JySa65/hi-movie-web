import { PosterImage } from '@Molecules/index';
import type { Movie } from '@Interfaces/movies';

const Poster = ({ data }: { data: Movie }): JSX.Element => {
  return (
    <section className="flex flex-col relative" key={data.id}>
      <PosterImage className="h-[35vh]" path={data.poster_path} average={data.vote_average} />
      <h3 className="text-white pl-2 pt-2">{data.title ?? data.name}</h3>
      <p className="text-white pl-2 text-sm">{data.release_date ?? data.first_air_date}</p>
    </section>
  );
};

export default Poster;
