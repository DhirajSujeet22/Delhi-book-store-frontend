
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScroll = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      {/* Back to top link */}
      <div
        className="back-option text-lg cursor-pointer"
        onClick={handleScroll}
      >
        Back to top
      </div>

      {/* Footer Links */}
      <div className="footer-links pb-4 !h-full">
        <ul>
          <p>Get to Know Us</p>
          <Link
            to="/careers"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Careers
          </Link>
          <Link
            to="/blog"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            About DBS
          </Link>
          <Link
            to="/faqs"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            FAQs
          </Link>
        </ul>

        <ul className="lg:block hidden">
          <p>Make Money with Us</p>
          <Link
            to="/sell"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Sell products on DBS
          </Link>
          <Link
            to="/sell-business"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Sell on DBS Business
          </Link>
          <Link
            to="/sell-apps"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Sell apps on DBS
          </Link>
          <Link
            to="/affiliate"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Become an Affiliate
          </Link>
          <Link
            to="/self-publish"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Self-Publish with Us
          </Link>
          <Link
            to="/host-hub"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Host an DBS Hub
          </Link>
          <Link
            to="/more-money-options"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            ›See More Make Money with Us
          </Link>
        </ul>

        <ul>
          <p>DBS Payment Products</p>
          <Link
            to="/business-card"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            DBS Business Card
          </Link>
          <Link
            to="/shop-points"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Shop with Points
          </Link>
          <Link
            to="/reload-balance"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Reload Your Balance
          </Link>
          <Link
            to="/currency-converter"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            DBS Currency Converter
          </Link>
        </ul>

        <ul className="lg:block hidden">
          <p>Let Us Help You</p>
          <Link
            to="/Term_condition"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Terms &amp; Conditions
          </Link>
          <Link
            to="/myprofile"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Your Account
          </Link>
          <Link
            to="/myorders"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Your Orders
          </Link>
          <Link
            to="/policy"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Shipping Rates &amp; Policies
          </Link>
          <Link
            to="/returnPage"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Returns &amp; Replacements
          </Link>
          <Link
            to="/manage-content"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Manage Your Content and Devices
          </Link>
          <Link
            to="/contact-us"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Contact Us
          </Link>
          <Link
            to="/help"
            className="font-medium lg:font-normal !text-base lg:!text-xs"
          >
            Help
          </Link>
        </ul>
      </div>

      {/* Country Info */}
      <div className="country-info h-full py-4 flex justify-around items-center mx-auto">
        <div className="logo">
          <img
            className="!w-36 lg:!w-24"
            src="/delhiBookStore-logo.png"
            alt="DBS logo"
          />
        </div>
        <div className="options h-full lg:!flex !hidden">
          <select className="h-full">
            <option value="En">English</option>
          </select>
          <select className="h-full">
            <option value="1">$ USD - U.S. Dollar</option>
          </select>
          <select className="h-full">
            <option value="4">United States</option>
          </select>
        </div>
      </div>

      {/* Policies */}
      <div className="policies text-xl lg:text-xs h-full py-4">
        <div className="pages">
          <Link to="/conditions-of-use" className="mr-4">
            Conditions of Use
          </Link>
          <Link to="/privacy-notice" className="mr-4">
            Privacy Notice
          </Link>
          <Link to="/ads-privacy">Your Ads Privacy Choices</Link>
        </div>
        © 1996-2023, DBS.com, Inc. or its affiliates
      </div>
    </footer>
  );
};

export default Footer;
