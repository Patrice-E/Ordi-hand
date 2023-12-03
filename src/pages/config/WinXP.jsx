import ConfigCard from '../../components/ConfigCard';

export default function WinXP() {
  const cfgOfficeAdv = {
    title: 'Config bureau avancée',
    price: 30,
    url: './assets/towers/xp_office_adv.png',
    proc: 'Pentium IV/Athlon 64',
    ram: '2 Go DDR',
    video: '256 Mo PCIe',
    hdd: '160 Go Sata',
    burner: 'DVD Sata',
    os: 'Windows XP SP3',
  };

  const cfgGamer = {
    title: 'Config multimédia/gamer',
    price: 70,
    url: './assets/towers/xp_media_gamer.png',
    proc: 'AMD/Intel Dual core',
    ram: '3 Go DDR2',
    video: 'performante 512 Mo PCIe',
    hdd: '250 Go Sata',
    burner: 'DVD Sata',
    os: 'Windows XP SP3',
  };

  return (
    <div className='home'>
      <section className='home__content'>
        <h2>Classe Windows XP</h2>
        <div className='configs'>
          <ConfigCard config={cfgOfficeAdv} />
          <ConfigCard config={cfgGamer} />
        </div>
      </section>
    </div>
  );
}
