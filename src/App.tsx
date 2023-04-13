import { RouterProvider } from 'react-router-dom';

import { Fallback } from '@Templates/index';
import router from './routes';

function App(): JSX.Element {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

export default App;
