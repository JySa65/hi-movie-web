import { Link as LinkRouter, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import './styles.css';

interface ILink {
  path: string;
  name: string;
}

const Link = ({ path, name }: ILink): JSX.Element => {
  const location = useLocation();

  return (
    <LinkRouter
      className={clsx({
        link: location.pathname !== path,
        'link-selected': location.pathname === path
      })}
      to={path}
    >
      {name}
    </LinkRouter>
  );
};

export default Link;
