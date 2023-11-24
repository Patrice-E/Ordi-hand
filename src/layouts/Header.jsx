import { useState } from 'react';
import HamburgerButton from '../components/HamburgerButton';
import NavBar from '../components/NavBar';

export default function Header() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <header className='banner'>
      <section className='banner__container'>
        <HamburgerButton isCHecked={isChecked} setIsChecked={setIsChecked} />
        <h1>Ordi'hand</h1>
        <NavBar isChecked={isChecked} />
      </section>
    </header>
  );
}
