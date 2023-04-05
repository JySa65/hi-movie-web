import { Details, Error404, Main, Movies, TVShow } from '@Pages/index';

export default [
  {
    path: '/',
    Element: Main,
    isIndex: true
  },
  {
    path: '/movies',
    Element: Movies,
    isIndex: false
  },
  {
    path: '/tv-show',
    Element: TVShow,
    isIndex: false
  },
  {
    path: 'detail/:id',
    Element: Details,
    isIndex: false
  },
  {
    path: '*',
    Element: Error404,
    isIndex: false
  }
];
