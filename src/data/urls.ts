export const baseUrl: string = 'https://api.themoviedb.org';
export const apiVersion: string = '3';
export const apiKey: string = '54a5e56a0a169453f7f5ca32ced3ca5f';
export const lang: string = 'es-Ve';

export const movies: string = `${apiVersion}/movie/now_playing`;

export const moviesPopular: string = `${apiVersion}/movie/popular`;

export const tvPopular: string = `${apiVersion}/tv/popular`;

export const movieDetail = (id: string): string => `${apiVersion}/movie/${String(id)}`;

export const similarMovieDetail = (id: string): string => `${apiVersion}/movie/${String(id)}/similar`;

export const recomendationMovieDetail = (id: string): string =>
  `${apiVersion}/movie/${String(id)}/recommendations`;

export const tvDetail = (id: string): string => `${apiVersion}/tv/${String(id)}`;

export const similarTVDetail = (id: string): string => `${apiVersion}/tv/${String(id)}/similar`;

export const recomendationTVDetail = (id: string): string => `${apiVersion}/tv/${String(id)}/recommendations`;
