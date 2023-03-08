import Header from '../Header';
import './layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="root">{children}</main>
    </>
  );
};

export default Layout;
