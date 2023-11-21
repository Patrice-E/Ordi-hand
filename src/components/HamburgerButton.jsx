export default function HamburgerButton({ isCHecked, setIsChecked }) {
  const handleChange = () => {
    setIsChecked(!isCHecked);
  };

  return (
    <div className='hamburger'>
      <input
        type='checkbox'
        name='hamburger__checkbox'
        id='hamburger__checkbox'
        className='hamburger__checkbox'
        checked={isCHecked}
        onChange={handleChange}
      />
      <label htmlFor='hamburger__checkbox' className='hamburger__label'>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
}
