import { AiFillStar } from 'react-icons/ai';

const PosterImageBashe = ({ average }: { average: number }): JSX.Element => {
  return (
    <span className="text-white rounded-tl-3xl rounded-br-3xl place-content-center h-[40px] w-[80px] absolute bottom-0 right-0 bg-black-primary text-xs font-medium flex items-center justify-evenly">
      {average}/10
      <AiFillStar />
    </span>
  );
};

export default PosterImageBashe;
