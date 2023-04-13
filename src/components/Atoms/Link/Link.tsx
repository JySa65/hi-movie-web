import { Link as LinkRouter, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import './styles.css';

interface ILink {
  path: string;
  name: string;
  open: boolean;
  close: () => void;
}

const Link = ({ path, name, open, close }: ILink): JSX.Element => {
  const location = useLocation();

  return (
    <LinkRouter
      className={clsx('transition-all duration-700 ease-out', {
        hidden: !open,
        link: location.pathname !== path,
        'link-selected': location.pathname === path
      })}
      onClick={close}
      to={path}
    >
      {name}
    </LinkRouter>
  );
};

export default Link;
