import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div>Logo</div>
      <Link to={"/"}>
        <img src="teaser.jpg" width={"60%"} height={"50%"} className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
