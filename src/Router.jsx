import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/_Layout';
import Error404 from './pages/Error404';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
