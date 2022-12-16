import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllReviews from "./pages/AllReviews";
import NewReview from "./pages/NewReview";
import NotFound from "./pages/NotFound";
import ReviewDetail from "./pages/ReviewDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/reviews" />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/reviews/:reviewId" element={<ReviewDetail />} />
        <Route path="/new-review" element={<NewReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
