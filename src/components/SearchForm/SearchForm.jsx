import css from "./SearchForm.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchForm = ({ onSearch }) => {
  const [qwery, setQwery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (qwery.trim()) {
      onSearch(qwery);
      setQwery("");
    } else {
      toast.error("Please enter word to search!");
      return;
    }
    e.target.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container}>
          <label className={css.label} htmlFor="searchInput">
            Please enter a title to search for a movie
          </label>
          <input
            className={css.input}
            type="text"
            id="searchInput"
            value={qwery}
            onChange={(e) => setQwery(e.target.value)}
          />
        </div>
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
export default SearchForm;
