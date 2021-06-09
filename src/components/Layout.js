import React from "react";

/* Stylesheet */
import "../scss/styles.scss";

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <main className="site-main">{children}</main>
        </div>
    );
};

export default Layout;
