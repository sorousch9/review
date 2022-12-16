import { Fragment, useRef } from "react";

import Card from "../UI/Card";
import classes from "./ReviewForm.module.css";

const ReviewForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddReview({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Fragment>
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}> Loading...</div>
          )}
          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn">Add Review</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default ReviewForm;
