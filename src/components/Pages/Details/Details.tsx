import { useParams, useNavigate } from 'react-router-dom';
import { useRequest } from '@src/hooks';
import { getMovieDetail, getRecomendationMovieDetail, getSimilarMovieDetail } from '@src/data/actions';
import { useEffect, useState } from 'react';
import Error404 from '../Error404';
import { SummaryMovie } from '@src/components/Organisms';
import type { MovieDetail } from '@src/Interfaces/movies';
import { Fallback, SwiperTemplate } from '@src/components/Templates';

const Details = (): JSX.Element => {
  const [show404, setShow404] = useState(false);
  const [waitFetcher, setWaitFetcher] = useState(true);
  const navigate = useNavigate();
  const dataParams = useParams();
  const [id, setId] = useState<string>(dataParams?.id as string);

  const { data = {}, error, isLoading } = useRequest(() => getMovieDetail(id));

  const { data: similars = [] } = useRequest(() => getSimilarMovieDetail(id), waitFetcher);
  const { data: recomendations = [] } = useRequest(() => getRecomendationMovieDetail(id), waitFetcher);

  useEffect(() => {
    if (error !== undefined && !(error as any)?.success) {
      setShow404(true);
    }
  }, [error]);

  useEffect(() => {
    if (Object.keys(data).length >= 1) {
      setWaitFetcher(false);
    }
  }, [data]);

  useEffect(() => {
    if (id !== dataParams.id) {
      setId(dataParams?.id as string);
      navigate(0);
    }
  }, [dataParams?.id]);

  if (show404) {
    return <Error404 />;
  }

  if (!isLoading && data) {
    return (
      <div>
        <SummaryMovie movie={data as MovieDetail} showMore={false} />
        {similars.length >= 1 && (
          <SwiperTemplate to={`/detail`} autoPlayDelay={3000} datas={similars} title="Peliculas Similares" />
        )}
        {recomendations.length >= 1 && (
          <SwiperTemplate
            to={`/detail`}
            autoPlayDelay={3500}
            datas={recomendations}
            title="Peliculas Recomendadas"
          />
        )}
      </div>
    );
  }

  return <Fallback />;
};

export default Details;
