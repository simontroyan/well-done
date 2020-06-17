import React from "react";
import { Link } from "react-router-dom";

import welldonelogo from "../../Resources/images/logos/WellDone.png";

export const WellDoneLogo = (props) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${welldonelogo}) no-repeat`,
      }}
    ></div>
  );

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link-logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
