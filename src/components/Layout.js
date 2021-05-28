import React from "react";
import Header from "./Header";

/* Stylesheet */
import "../scss/styles.scss";
import Footer from "./Footer";

const Layout = ({ children }) => {
   return (
      <>
         <Header />
         <div className="wrapper">
            <main className="site-main">{children}</main>
         </div>
         <Footer />
      </>
   );
};

export default Layout;
