import React from "react";
import { WellDoneLogo } from "../ui/icons";
import { Tag } from "../ui/misc";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <WellDoneLogo link={true} linkTo="/" width="70px" height="70px" />
      </div>
      <div className="footer_copyright">
        Well Done 2020. All rights not reserved
        <br />
        <Tag
          bck="#ffffff"
          size="22px"
          color="#0e1731"
          widthMatches="20%"
          borderRadius="4px"
          marginTop="20px"
          link={true}
          linkto="/sign_in"
        >
          Admin Login
        </Tag>
      </div>
    </footer>
  );
};

export default Footer;
