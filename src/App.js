import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllReviews from "./pages/AllReviews";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/reviews" />} />
        <Route path="/reviews" element={<AllReviews/>} />
      </Routes>
    </Layout>
  );
}

export default App;
