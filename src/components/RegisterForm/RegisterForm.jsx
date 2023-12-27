import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './styles.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input required type="text" name="name" minLength={2} maxLength={20} />
      </label>
      <label className={css.label}>
        Email
        <input required type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input required type="password" name="password" minLength={8} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
