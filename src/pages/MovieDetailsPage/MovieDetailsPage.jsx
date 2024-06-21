import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  return (
    <div className={css.container}>
      <img src="" alt="" className={css.img} />
      <h2 className={css.title}></h2>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.subTitle}>
            <span className={css.description}></span>
          </p>
        </li>
        <li className={css.item}>
          <p className={css.subTitle}>
            <span className={css.description}></span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetailsPage;
