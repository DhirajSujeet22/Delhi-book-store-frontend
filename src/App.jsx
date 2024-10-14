import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Assuming you use React Router

import Layout from "./layout/Layout";
import Homepage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import PageUp from "./components/common/PageUp";
import DetailPage from "./pages/DetailPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageUp />
                <Homepage />
              </>
            }
          />

          <Route
            path="/categories/*"
            element={
              <>
                <PageUp />
                <CategoryPage />
              </>
            }
          />

          <Route
            path="/detailsPage/:id"
            element={
              <>
                <PageUp />
                <DetailPage />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
