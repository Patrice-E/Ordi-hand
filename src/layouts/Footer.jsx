export default function Footer() {
  const actualYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p>Ordi'hand © 2012-{actualYear}</p>
    </footer>
  );
}
