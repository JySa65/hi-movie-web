import http from './http';
import type { Movie, MovieDetail } from '@Interfaces/movies';
import type { MovieResponse } from '@Interfaces/moviesResponse';
import type { TVDetail } from '@src/Interfaces/tv';
import store from '@Store/index';
import { moviesActios } from '@Modules/Movies';
import * as urls from './urls';

export const getMovies = async (): Promise<Movie[]> => {
  const { results } = (await http.get(urls.movies)) as unknown as MovieResponse;
  store.dispatch(moviesActios.addMovies(results));
  return results;
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  const { results } = (await http.get(urls.moviesPopular)) as unknown as MovieResponse;
  store.dispatch(moviesActios.addPopularMovies(results));
  return results;
};

export const getPopularTV = async (): Promise<Movie[]> => {
  const { results } = (await http.get(urls.tvPopular)) as unknown as MovieResponse;
  store.dispatch(moviesActios.addTV(results));
  return results;
};

export const getMovieDetail = async (id: string): Promise<MovieDetail> => {
  const data = (await http.get(urls.movieDetail(id))) as unknown as MovieDetail;
  return data;
};

export const getSimilarMovieDetail = async (id: string): Promise<Movie[]> => {
  const { results } = (await http.get(urls.similarMovieDetail(id))) as unknown as MovieResponse;
  return results;
};

export const getRecomendationMovieDetail = async (id: string): Promise<Movie[]> => {
  const { results } = (await http.get(urls.recomendationMovieDetail(id))) as unknown as MovieResponse;
  return results;
};

export const getTVDetail = async (id: string): Promise<TVDetail> => {
  const data = (await http.get(urls.tvDetail(id))) as unknown as TVDetail;
  return data;
};

export const getSimilarTVDetail = async (id: string): Promise<Movie[]> => {
  const { results } = (await http.get(urls.similarTVDetail(id))) as unknown as MovieResponse;
  return results;
};

export const getRecomendationTVDetail = async (id: string): Promise<Movie[]> => {
  const { results } = (await http.get(urls.recomendationTVDetail(id))) as unknown as MovieResponse;
  return results;
};
