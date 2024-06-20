import css from "./Form.module.css";

const Form = () => {
  return (
    <form className={css.form}>
      <div className={css.container}>
        <label className={css.label} htmlFor="searchInput">
          Please enter a title to search for a movie
        </label>
        <input className={css.input} type="text" id="searchInput" />
      </div>
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
