import { Routes, Route } from 'react-router-dom';
import router from './routes';
import { MainLayout } from '@Layouts/index';

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {router.map(({ isIndex, Element, path }, index) => {
          if (isIndex) {
            return (
              <>
                <Route index key={index} Component={Element} />;
              </>
            );
          }
          return <Route path={path} Component={Element} key={index} />;
        })}
      </Route>
    </Routes>
  );
}
