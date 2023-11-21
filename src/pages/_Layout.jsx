import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
