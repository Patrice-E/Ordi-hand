export default function Home() {
  return (
    <div className='home'>
      <section className='home__content'>
        <h2>Bienvenue chez Ordi'hand</h2>
        <h3>Vente d'ordinateurs d'occasion</h3>
        <p>
          N'hésitez pas à consulter nos différentes générations pour dénicher
          l'occasion qui vous conviendra le plus.
        </p>
        <p>
          Contactez nous pour réserver ou obtenir des informations sur nos
          ordinateurs.
        </p>
      </section>
      <section className='home__logo'>
        <img src='logo.svg' alt='' className='logo' />
      </section>
    </div>
  );
}
