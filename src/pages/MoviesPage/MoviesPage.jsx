import css from "./MoviesPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Form from "../../components/Form/Form";

const MoviesPage = () => {
  return (
    <div className={css.container}>
      <Navigation />
      <Form />
    </div>
  );
};

export default MoviesPage;
