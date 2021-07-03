import React from "react";
import Banner from "../../assets/hero.svg";
import Sd from "../Sd";

const Splash = () => {
    return (
        <section className="splash">
            {/* First Row */}
            <div className="splash-row-01">
                {/* Text Content */}
                <div className="text-content">
                    <div className="inner-text-content">
                        <h1>Vincent Casilla</h1>
                        <h2>Creative Developer</h2>
                        <p>Front-end Web Developer based in Vancouver, BC</p>
                    </div>
                    <Sd />
                </div>

                {/* Banner Image */}
                <div className="banner-image" id="banner-image">
                    <img src={Banner} alt="Person Innovating" width="400" />
                </div>
            </div>

            {/* Second Row */}
            <div className="splash-row-02" id="role-description">
                <p className="role-description">I build user-facing digital experiences</p>
            </div>
        </section>
    );
};

export default Splash;
