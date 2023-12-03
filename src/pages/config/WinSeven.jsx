import ConfigCard from '../../components/ConfigCard';

export default function WinSeven() {
  const cfgMediaStd = {
    title: 'Config multimédia standard',
    price: 60,
    url: './assets/towers/seven_media_std.png',
    proc: 'AMD/Intel Dual core',
    ram: '3 Go DDR2',
    video: '512 Mo PCIe + HDMI',
    hdd: '250 Go Sata',
    burner: 'DVD Sata',
    os: 'Windows Seven SP1 32 bits',
  };

  const cfgMediaAdv = {
    title: 'Config multimédia avancée',
    price: 90,
    url: './assets/towers/seven_media_adv.png',
    proc: 'AMD/Intel Dual core',
    ram: '4 Go DDR',
    video: '1024 Mo PCIe + HDMI',
    hdd: '320 Go Sata',
    burner: 'DVD Sata',
    os: 'Windows Seven SP1 64 bits',
  };

  const cfgGamerAdv = {
    title: 'Config gamer avancée',
    price: 120,
    url: './assets/towers/seven_gamer_adv.png',
    proc: 'AMD/Intel Quad core',
    ram: '4 Go DDR2',
    video: 'gamer 1024 Mo',
    hdd: '500 Go Sata',
    burner: 'DVD Sata',
    os: 'Windows Seven SP1 64 bits',
  };

  return (
    <div className='home'>
      <div>
        <section className='home__content'>
          <h2>Classe Windows 7 multimédia</h2>
          <div className='configs'>
            <ConfigCard config={cfgMediaStd} />
            <ConfigCard config={cfgMediaAdv} />
          </div>
        </section>
        <section className='home__content'>
          <h2>Classe Windows 7 gamer</h2>
          <div className='configs'>
            <ConfigCard config={cfgGamerAdv} />
          </div>
        </section>
      </div>
    </div>
  );
}
