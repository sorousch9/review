import classes from './HighlightedReview.module.css';

const HighlightedReview = (props) => {
  return (
    <figure className={classes.review}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedReview;
