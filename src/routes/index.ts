import { createBrowserRouter } from 'react-router-dom';
import router from './routes';
import { MainLayout } from '@Layouts/index';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: router
  }
]);

if (import.meta.hot != null) {
  import.meta.hot.dispose(() => {
    routes.dispose();
  });
}

export default routes;
