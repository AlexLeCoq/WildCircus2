import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a>Accueil</a>
    </Link>
    <Link href="/artists">
      <a>Artiste</a>
    </Link>
    <Link href="/events">
      <a>Événements</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </div>
);

export default Header;