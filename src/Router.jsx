import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/_Layout';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Linux from './pages/config/Linux';
import WinXP from './pages/config/WinXP';
import WinSeven from './pages/config/WinSeven';
import WinTen from './pages/config/WinTen';
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
        path: 'linux',
        element: <Linux />,
      },
      {
        path: 'winxp',
        element: <WinXP />,
      },
      {
        path: 'winseven',
        element: <WinSeven />,
      },
      {
        path: 'winten',
        element: <WinTen />,
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
