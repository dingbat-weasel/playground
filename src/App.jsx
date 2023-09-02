import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Project from './ui/Project';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/project/:projectId',
        element: <Project />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
