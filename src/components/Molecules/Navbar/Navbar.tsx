import clsx from 'clsx';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { LinkNavbar } from '@Atoms/index';
import useNavbar from './useNavbar';

interface INavbar {
  links: Array<{ path: string; name: string }>;
}

const Navbar = ({ links }: INavbar): JSX.Element => {
  const { isMovil, open, showColorNavbar, handleCloseOpen } = useNavbar();

  return (
    <nav
      className={clsx(
        'z-[2] bg-black-primary sm:shadow  transition-all duration-300 fixed w-full px-5 md:px-10',
        {
          'md:bg-transparent md:shadow-none': !showColorNavbar,
          'md:bg-black-primary shadow-lg': showColorNavbar
        }
      )}
      role="navigation"
    >
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        <div className="flex items-center relative">
          <span className="absolute bottom-[7px] md:top-[1px]">
            <BsFillCameraVideoFill size={30} color="white" />
          </span>
          <Link to="/">
            <h1 className="font-josefin text-3xl md:text-4xl pl-9 font-bold tracking-tight">
              <span className="text-white">Hi </span>
              <span className="text-red-primary">Movie!</span>
            </h1>
          </Link>
        </div>
        <div className="ml-auto md:hidden">
          <button
            onClick={handleCloseOpen}
            className="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path fill="currentColor" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={clsx(
            'w-full transition-all ease-out duration-500 md:transition-none md:w-auto md:flex-grow md:flex md:items-center',
            { 'h-36': isMovil && open, 'h-0': isMovil && !open }
          )}
        >
          <ul className="flex flex-col duration-300 ease-out transition-none mt-5 mx-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 ">
            {links.map((link) => (
              <li key={link.path} className="mt-4 md:mt-0">
                <LinkNavbar
                  {...link}
                  open={open}
                  close={() => {
                    if (isMovil && open) handleCloseOpen();
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isMovil && open && (
        <div className="h-screen bg-transparent absolute z-[9999] w-full" onClick={handleCloseOpen} />
      )}
    </nav>
  );
};

export default Navbar;
