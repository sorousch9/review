import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import ReviewItem from "./ReviewItem";
import classes from "./ReviewList.module.css";

const sortReviews = (reviews, ascending) => {
  return reviews.sort((reviewA, reviewB) => {
    if (ascending) {
      return reviewA.id > reviewB.id ? 1 : -1;
    } else {
      return reviewA.id < reviewB.id ? 1 : -1;
    }
  });
};

const ReviewList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedReviews = sortReviews(props.reviews, isSortingAscending);

  const changeSortingHandler = () => {
    navigate({search: `?sort=${isSortingAscending ? "desc" : "asc"}`}, { replace: true });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedReviews.map((review) => (
          <ReviewItem
            key={review.id}
            id={review.id}
            author={review.author}
            text={review.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default ReviewList;
