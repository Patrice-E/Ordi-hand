import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/_Layout';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Contact from './pages/Contact';

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
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
