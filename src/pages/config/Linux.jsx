import ConfigCard from '../../components/ConfigCard';

export default function Linux() {
  const cfgMediaStd = {
    title: 'Config multimédia standart',
    price: 60,
    url: './assets/towers/linux_media_std.png',
    proc: 'AMD/Intel Dual Core',
    ram: '4 Go DDR2',
    video: '512 Mo + HDMI',
    hdd: '160 Go Sata',
    burner: 'DVD Sata',
    os: 'Ubuntu 18.04.02 LTS 64 bits',
  };

  return (
    <div className='home'>
      <section className='home__content'>
        <h2>Classe linux</h2>
        <ConfigCard config={cfgMediaStd} />
      </section>
    </div>
  );
}
