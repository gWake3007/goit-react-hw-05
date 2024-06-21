import css from "./MoviesPage.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  return (
    <div className={css.container}>
      <searchForm />
    </div>
  );
};

export default MoviesPage;
