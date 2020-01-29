import Head from 'next/Head';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Head>
      <title>Wild Circus 2.0</title>
    </Head>
    <Header />
    {children}
  </div>
);

export default Layout;