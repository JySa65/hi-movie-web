import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Fallback(): JSX.Element {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#ff0100">
      <div className="px-[10px] pt-1">
        <Skeleton count={1} height={110} />
      </div>
      <div className="grid grid-cols-2 gap-4 h-[calc((100vh-110px)-2rem)] mt-2 px-[10px]">
        <span className="grid grid-rows-3 h-full gap-3">
          <Skeleton count={1} className="h-full" />
          <Skeleton count={1} className="h-full" />
          <Skeleton count={1} className="h-full" />
        </span>
        <span className="grid grid-rows-3 h-full gap-3">
          <Skeleton count={1} className="h-full" />
          <Skeleton count={1} className="h-full" />
          <Skeleton count={1} className="h-full" />
        </span>
      </div>
    </SkeletonTheme>
  );
}
