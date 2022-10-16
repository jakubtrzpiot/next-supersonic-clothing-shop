import Navbar from './organisms/Navbar';
import Footer from './organisms/Footer';

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col px-4 bg-white lg:px-8 container">
      <Navbar />
      <div className="grow flex">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
