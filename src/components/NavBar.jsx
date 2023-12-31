import { NavLink } from 'react-router-dom';

export default function NavBar({ isChecked, setIsChecked }) {
  const navClass = isChecked ? 'nav nav__open' : 'nav';
  const handleClick = () => {
    setIsChecked(false);
  };

  return (
    <nav className={navClass}>
      <div className='nav__mainlinks'>
        <NavLink to='/linux' onClick={handleClick}>
          <img src='assets/icons/linux.png' alt='' />
          <span>Linux</span>
        </NavLink>
        <NavLink to='/winxp' onClick={handleClick}>
          <img src='assets/icons/winxp.png' alt='' />
          <span>Windows XP</span>
        </NavLink>
        <NavLink to='/winseven' onClick={handleClick}>
          <img src='assets/icons/winseven.png' alt='' />
          <span>Windows 7</span>
        </NavLink>
        <NavLink to='/winten' onClick={handleClick}>
          <img src='assets/icons/winten.png' alt='' />
          <span>Windows 10</span>
        </NavLink>
        <NavLink to='/contact' onClick={handleClick}>
          <img src='assets/icons/contact.png' alt='' />
          <span>Contact</span>
        </NavLink>
      </div>
      <a
        href='https://www.leboncoin.fr/recherche?text=ordi%27hand&region=2'
        target='_blank'
      >
        <img src='assets/lbc.png' alt='' />
      </a>
    </nav>
  );
}
