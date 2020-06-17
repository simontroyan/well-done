import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not_found_container">
      <div>Sorry :(</div>
      <div>Page not found</div>
      <Link to="/">Go HomePage</Link>
    </div>
  );
};

export default NotFound;
