import { Details, Error404, Main, Movies, TVShow, DetailsTV } from '@Pages/index';
import { getMovies, getPopularMovies, getPopularTV } from '@src/data/actions';
import { type RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    Component: Main,
    index: true,
    loader: getMovies
  },
  {
    path: '/movies',
    Component: Movies,
    index: false,
    loader: getPopularMovies
  },
  {
    path: '/tv-show',
    Component: TVShow,
    index: false,
    loader: getPopularTV
  },
  {
    path: 'detail/:id',
    Component: Details,
    index: false
  },
  {
    path: 'detail-tv/:id',
    Component: DetailsTV,
    index: false
  },
  {
    path: '*',
    Component: Error404,
    index: false
  }
] as RouteObject[];
