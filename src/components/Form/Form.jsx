import css from "./Form.module.css";

const Form = () => {
  return (
    <form className={css.form}>
      <label htmlFor="searchInput">
        Please enter a title to search for a movie
      </label>
      <input type="text" id="searchInput" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
