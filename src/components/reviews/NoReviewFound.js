import { Link } from "react-router-dom";

import classes from "./NoReviewFound.module.css";

const NoReviewsFound = () => {
  return (
    <div className={classes.noreviews}>
      <p>No reviews found!</p>
      <Link className="btn" to="/new-review">
        Add a new Review
      </Link>
    </div>
  );
};

export default NoReviewsFound;
