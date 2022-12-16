import { Fragment, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import HighlightedReview from "../components/reviews/HighlightedReview";
import useHttp from "../hooks/use-http";
import { getSingleReview } from "../lib/api";


const ReviewDetail = () => {
  const params = useParams();
  const { reviewId } = params;
  const {
    sendRequest,
    status,
    data: loadedReview,
    error,
  } = useHttp(getSingleReview, true);

  useEffect(() => {
    sendRequest(reviewId);
  }, [sendRequest, reviewId]);

  if (status === "pending") {
    return (
      <div className="centered">
        Loading...
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedReview.text) {
    return <p>No review found!</p>;
  }

  return (
    <Fragment>
      <HighlightedReview
        text={loadedReview.text}
        author={loadedReview.author}
      />
      <Outlet />
    </Fragment>
  );
};

export default ReviewDetail;
