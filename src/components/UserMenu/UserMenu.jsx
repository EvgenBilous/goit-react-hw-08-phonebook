import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import css from './styles.module.css';

const UserMenu = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.flexBox}>
      {isLoggedIn && <div>Hello, {user.name}</div>}
      {isLoggedIn && (
        <button className={css.button} onClick={handleLogout}>
          Log out
        </button>
      )}
    </div>
  );
};

export default UserMenu;
