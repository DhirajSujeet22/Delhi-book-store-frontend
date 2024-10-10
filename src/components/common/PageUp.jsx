import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageUp = () => {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [path.search, path.pathname]);
};

export default PageUp;
