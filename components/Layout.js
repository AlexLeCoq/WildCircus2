import Head from 'next/Head';
import Header from './Header';
import NavBar from './Navbar/NavBar';
import navLinks from './Navbar/navLinks';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Wild Circus 2.0</title>
    </Head>
    <NavBar navLinks={navLinks} />
    {children}
  </div>
);

export default Layout;