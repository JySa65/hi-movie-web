import { Outlet } from 'react-router-dom';

import { NavBar } from '@Molecules/index';

const links = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/movies',
    name: 'Peliculas'
  },
  {
    path: '/tv-show',
    name: 'TV Show'
  }
];

const Main = (): JSX.Element => {
  return (
    <>
      <NavBar links={links} />
      <Outlet />
    </>
  );
};

export default Main;
