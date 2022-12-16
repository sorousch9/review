import { Link } from "react-router-dom";

import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <p>{props.text}</p>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/reviews/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default ReviewItem;
