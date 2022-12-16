import { useEffect } from "react";
import ReviewList from "../components/reviews/ReviewList";
import useHttp from "../hooks/use-http";
import { getAllReviews } from "../lib/api";
import NoReviewsFound from "../components/reviews/NoReviewFound";

const AllReviews = () => {
  const {
    sendRequest,
    status,
    data: loadedReviews,
    error,
  } = useHttp(getAllReviews, true);
  
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return <div className="centered"> Loading...</div>;
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedReviews || loadedReviews.length === 0)
  ) {
    return <NoReviewsFound />;
  }

  return <ReviewList reviews={loadedReviews} />;
};

export default AllReviews;
