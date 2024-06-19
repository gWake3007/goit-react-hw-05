import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>Home</li>
        <li className={css.item}>Movies</li>
      </ul>
    </div>
  );
};

export default Navigation;
