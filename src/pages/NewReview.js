import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewForm from "../components/reviews/ReviewForm";
import useHttp from "../hooks/use-http";
import { addReview } from "../lib/api";

const NewReview = () => {
  const { sendRequest, status } = useHttp(addReview);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/reviews");
    }
  }, [status, navigate]);

  const addReviewHandler = (reviewData) => {
    sendRequest(reviewData);
  };

  return (
    <ReviewForm
      isLoading={status === "pending"}
      onAddReview={addReviewHandler}
    />
  );
};

export default NewReview;
