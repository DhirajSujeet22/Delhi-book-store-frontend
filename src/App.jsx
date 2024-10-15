import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Assuming you use React Router

import Layout from "./layout/Layout";
import Homepage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import PageUp from "./components/common/PageUp";
import DetailPage from "./pages/DetailPage";
import PolicyPage from "./pages/PolicyPage";
import ReturnPolicyPage from "./pages/ReturnPage";
import Term_conditionPage from "./pages/Term_conditionPage";

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
            path="/pages/Term_conditionPage/*"
            element={
              <>
                <PageUp />
                <Term_conditionPage/>
              </>
            }
          />
          <Route
            path="/pages/PolicyPage/*"
            element={
              <>
                <PageUp />
                <PolicyPage/>
              </>
            }
          />
          <Route
            path="/Pages/ReturnPage/*"
            element={
              <>
                <PageUp />
                <ReturnPolicyPage/>
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

            // <Route path="/policy" element={<PolicyPage />} />
            
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
