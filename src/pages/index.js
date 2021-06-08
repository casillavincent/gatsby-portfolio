/* Homepage */
import React from "react";
import Layout from "../components/Layout";
import Mission from "../components/Mission";
import Splash from "../components/Splash";
import { Helmet as Lordicon } from "react-helmet";
import FeaturedWork from "../components/Featured";
import Contact from "../components/Contact";
import TopBtn from "../components/Widgets/TopBtn";

export default function Home() {
    return (
        <Layout>
            {/* Loads the Lordicon CDN at the end of the head tag */}
            <Lordicon>
                <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script>
            </Lordicon>
            <Splash />
            <Mission />
            <FeaturedWork />
            <Contact />
            <TopBtn />
        </Layout>
    );
}
