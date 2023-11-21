import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/_Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
