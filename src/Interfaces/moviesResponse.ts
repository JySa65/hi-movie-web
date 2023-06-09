import type { Movie } from './movies';

export interface MovieResponse {
  status: number;
  dates: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}
