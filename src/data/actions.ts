import http from './http';
import type { Movie } from '@Interfaces/movies';
import type { MovieResponse } from '@Interfaces/moviesResponse';
import store from '@Store/index';
import { moviesActios } from '@Modules/Movies';
import * as urls from './urls';

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const { results } = (await http.get(urls.movies)) as unknown as MovieResponse;
    store.dispatch(moviesActios.addMovies(results));
    return results;
  } catch (error) {
    return [];
  }
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const { results } = (await http.get(urls.moviesPopular)) as unknown as MovieResponse;
    store.dispatch(moviesActios.addPopularMovies(results));

    return results;
  } catch (error) {
    return [];
  }
};

export const getPopularTV = async (): Promise<Movie[]> => {
  try {
    const { results } = (await http.get(urls.tvPopular)) as unknown as MovieResponse;
    store.dispatch(moviesActios.addTV(results));
    return results;
  } catch (error) {
    return [];
  }
};
