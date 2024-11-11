import { useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Assuming you use React Router
const Blog = React.lazy(() => import("./pages/Blog"));
const Layout = React.lazy(() => import("./layout/Layout"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const PageUp = React.lazy(() => import("./components/common/PageUp"));
const DetailPage = React.lazy(() => import("./pages/DetailPage"));
const PolicyPage = React.lazy(() => import("./pages/PolicyPage"));
const ReturnPolicyPage = React.lazy(() => import("./pages/ReturnPage"));
const Term_conditionPage = React.lazy(() =>
  import("./pages/Term_conditionPage")
);
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Signin = React.lazy(() => import("./pages/Signin"));
const Registration = React.lazy(() => import("./pages/Registration"));
const Faqs = React.lazy(() => import("./pages/Faqs"));
const Help = React.lazy(() => import("./pages/Help"));
const Forgetpswd = React.lazy(() => import("./components/Forgetpswd"));
const Myorders = React.lazy(() => import("./pages/Myorders"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const AddressEdit = React.lazy(() => import("./pages/AddressEdit"));
const Error404 = React.lazy(() => import("./components/Error404"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/term_condition" element={<Term_conditionPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/returnPage" element={<ReturnPolicyPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/forgot-password" element={<Forgetpswd />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addressedit" element={<AddressEdit />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/detailsPage/:id" element={<DetailPage />} />
        </Routes>
        <PageUp />
      </Layout>
    </Router>
  );
}

export default App;
