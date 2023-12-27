import { Link, Outlet } from 'react-router-dom';

import css from './styles.module.css';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = () => {
  return (
    <div className={css.layoutBox}>
      <header className={css.header}>
        <div className={`${css.container} ${css.flexBox}`}>
          <Link className={css.logo} to="/">
            Logo
          </Link>
          <Navigation />
          <UserMenu />
        </div>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <div className={`${css.container}`}>Evgen Bilous - 2023</div>
      </footer>
    </div>
  );
};

export default Layout;
