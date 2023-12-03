export default function ConfigCard({ config }) {
  return (
    <article className='config'>
      <h3>
        {config.title} : {config.price}€
      </h3>
      <section className='config__content'>
        <img src={config.url} alt='à venir' />
        <ul>
          <li>Processeur {config.proc}</li>
          <li>Mémoire {config.ram}</li>
          <li>Carte graphique {config.video}</li>
          <li>Disque dur {config.hdd}</li>
          <li>Graveur {config.burner}</li>
          <li>{config.os}</li>
        </ul>
      </section>
    </article>
  );
}
