import { useState } from 'react';
import clsx from 'clsx';
import { PosterImageBashe } from '@src/components/Atoms';
import NoImage from '@Assets/no_Image_Available.jpeg';

interface IPosterImage {
  path: string;
  className?: string;
  alt?: string;
  average?: number;
}

const PosterImage = ({ path, alt, className, average }: IPosterImage): JSX.Element => {
  const [loadImg, setLoadImg] = useState(false);
  return (
    <div
      className={clsx('rounded-3xl overflow-hidden shadow-lg cursor-pointer relative', {
        [className as string]: className !== ''
      })}
    >
      <img
        className={clsx('w-full h-full object-cover', {
          hidden: !loadImg
        })}
        src={`https://image.tmdb.org/t/p/original/${path}`}
        alt={alt ?? 'image poster'}
        onLoad={() => {
          setLoadImg(true);
        }}
      />
      {!loadImg && (
        <img className={clsx('w-full h-full object-cover')} src={NoImage} alt={alt ?? 'image poster'} />
      )}
      {average != null && <PosterImageBashe average={average} />}
    </div>
  );
};

export default PosterImage;
