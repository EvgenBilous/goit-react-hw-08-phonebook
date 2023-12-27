import css from './styles.module.css';

export const Container = ({ children }) => {
  return <div className={css.box}>{children}</div>;
};
