import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Accueil</a>
    </Link>
    <Link href="/artists">
      <a style={linkStyle}>Artiste</a>
    </Link>
    <Link href="/evtns">
      <a style={linkStyle}>Événements</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;