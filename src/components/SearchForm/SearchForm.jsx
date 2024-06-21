import css from "./SearchForm.module.css";

const SearchForm = () => {
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
export default SearchForm;

// import { Formik, Form, Field } from "formik";

// const SearchForm = () => {
//   return (
//     <Formik>
//       <Form>
//         <div>
//           <label htmlFor=""></label>
//           <Field></Field>
//         </div>
//         <button></button>
//       </Form>
//     </Formik>
//   );
// };
