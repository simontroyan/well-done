import React from "react";
import Header from "../Components/Header_footer/header";
import Footer from "../Components/Header_footer/footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
