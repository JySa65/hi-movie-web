import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRequest } from '@src/hooks';
import { getTVDetail, getRecomendationTVDetail, getSimilarTVDetail } from '@src/data/actions';
import Error404 from '../Error404';
import { SummaryMovie } from '@src/components/Organisms';
import { Fallback, SwiperTemplate } from '@src/components/Templates';
import type { TVDetail } from '@src/Interfaces/tv';
import type { MovieDetail } from '@src/Interfaces/movies';

const Details = (): JSX.Element => {
  const [show404, setShow404] = useState(false);
  const [waitFetcher, setWaitFetcher] = useState(true);
  const navigate = useNavigate();
  const dataParams = useParams();
  const [id, setId] = useState<string>(dataParams?.id as string);
  const { data, error, isLoading } = useRequest(() => getTVDetail(id), id === '');

  const { data: similars = [] } = useRequest(() => getSimilarTVDetail(id), waitFetcher);
  const { data: recomendations = [] } = useRequest(() => getRecomendationTVDetail(id), waitFetcher);

  useEffect(() => {
    if (error !== undefined && !(error as any)?.success) {
      setShow404(true);
    }
  }, [error]);

  useEffect(() => {
    if (Object.keys(data ?? {}).length >= 1) {
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
    const _data = {
      ...(data as TVDetail),
      title: data?.name,
      original_title: data?.original_name,
      release_date: data?.first_air_date
    };
    return (
      <div>
        <SummaryMovie movie={_data as unknown as MovieDetail} showMore={false} />
        {similars.length >= 1 && (
          <SwiperTemplate to="/detail-tv" autoPlayDelay={3000} datas={similars} title="TV Similares" />
        )}
        {recomendations.length >= 1 && (
          <SwiperTemplate
            to="/detail-tv"
            autoPlayDelay={3500}
            datas={recomendations}
            title="TV Recomendadas"
          />
        )}
      </div>
    );
  }

  return <Fallback />;
};

export default Details;
