import { BsFillCameraVideoFill } from 'react-icons/bs';

import { LinkNavbar } from '@Atoms/index';

interface INavbar {
  links: Array<{ path: string; name: string }>;
}

const Navbar = ({ links }: INavbar): JSX.Element => {
  return (
    <nav className="bg-transparent w-full grid grid-cols-2 px-14 py-9 items-center">
      <div className="flex items-center relative">
        <span className="absolute top-[1px]">
          <BsFillCameraVideoFill size={30} color={'white'} />
        </span>
        <h1 className="font-josefin text-4xl pl-9 font-bold">
          <span className="text-white">Hi </span>
          <span className="text-red-primary">Movie!</span>
        </h1>
      </div>
      <ul className="w-full flex justify-end ">
        {links.map((link) => (
          <li key={link.path}>
            <LinkNavbar {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
