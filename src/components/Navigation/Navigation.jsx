import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import css from './styles.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ul className={`${css.flexBox} ${css.navList}`}>
        <li>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink className={css.link} to="/register">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="/login">
                Login
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li>
              <NavLink className={css.link} to="/contacts">
                Contacts
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
