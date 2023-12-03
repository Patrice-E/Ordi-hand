import ConfigCard from '../../components/ConfigCard';

export default function WinTen() {
  const cfgMediaStd = {
    title: 'Config multimédia standard',
    price: 70,
    url: './assets/towers/ten_media_std.jpg',
    proc: 'Intel Pentium G',
    ram: '4 Go DDR3',
    video: '512 Mo',
    hdd: '250 Go Sata',
    burner: 'DVD Sata',
    os: 'Windows 10 32 bits',
  };

  const cfgMediaPerf = {
    title: 'Config multimédia performant',
    price: 110,
    url: './assets/towers/ten_media_perf.png',
    proc: 'Intel Pentium G',
    ram: '4 Go DDR3',
    video: '1024 Mo + HDMI',
    hdd: '32 Go SSD + 500 Go',
    burner: 'DVD Sata',
    os: 'Windows 10 32 bits',
  };

  const cfgMediaUlt = {
    title: 'Config multimédia ultime',
    price: 170,
    url: './assets/towers/ten_media_ult.png',
    proc: 'Intel i5/i7',
    ram: '8 Go DDR3',
    video: '2048 Mo PCIe',
    hdd: '64 Go SSD + 500Go',
    burner: 'DVD Sata',
    os: 'Windows 10 64 bits',
  };

  const cfgGamerPerf = {
    title: 'Config gamer performant',
    price: 170,
    url: './assets/towers/ten_gamer_perf.png',
    proc: 'Intel i3',
    ram: '6 Go DDR3',
    video: 'gamer 1024 Mo',
    hdd: '64 Go SSD + 500 Go',
    burner: 'DVD Sata',
    os: 'Windows 10 64 bits',
  };

  const cfgGamerXtrem = {
    title: 'Config gamer extrème',
    price: 250,
    url: './assets/towers/ten_gamer_xtrem.png',
    proc: 'Intel i5',
    ram: '8 Go DDR3',
    video: 'gamer 2048Mo',
    hdd: '128 Go SSD + 1 To',
    burner: 'DVD Sata',
    os: 'Windows 10 64 bits',
  };

  const cfgGamerUlt = {
    title: 'Config gamer ultime',
    price: 350,
    url: './assets/towers/ten_gamer_ult.png',
    proc: 'Intel i7',
    ram: '8 Go DDR3',
    video: 'gamer 2048Mo',
    hdd: '256 Go SSD + 1 To',
    burner: 'DVD Sata',
    os: 'Windows 10 64 bits',
  };

  return (
    <div className='home'>
      <div>
        <section className='home__content'>
          <h2>Classe Windows 10 multimédia</h2>
          <div className='configs'>
            <ConfigCard config={cfgMediaStd} />
            <ConfigCard config={cfgMediaPerf} />
            <ConfigCard config={cfgMediaUlt} />
          </div>
        </section>
        <section className='home__content'>
          <h2>Classe Windows 10 gamer</h2>
          <div className='configs'>
            <ConfigCard config={cfgGamerPerf} />
            <ConfigCard config={cfgGamerXtrem} />
            <ConfigCard config={cfgGamerUlt} />
          </div>
        </section>
      </div>
    </div>
  );
}
