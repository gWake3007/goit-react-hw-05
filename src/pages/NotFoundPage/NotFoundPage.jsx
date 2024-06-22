import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";
import { PAGE_NOT_FOUND } from "../../api/api-movies";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <Link to="/">Go to Homepage</Link>
      <div className={css.img}>
        <img src={PAGE_NOT_FOUND} alt="NotFoundPage" />
      </div>
    </div>
  );
};

export default NotFoundPage;
