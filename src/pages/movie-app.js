import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ProjectDesign from "../components/ProjectComponents/ProjectDesign";
import ProjectOverview from "../components/ProjectComponents/ProjectOverview";
import ProjectTitle from "../components/ProjectComponents/ProjectTitle";
import { projectTitles, projectOverview, projectInfo } from "../globals/info";

const MovieApp = () => {
    return (
        <React.Fragment>
            <Header theme="light" />
            <Layout>
                {/* Project Title */}
                <ProjectTitle title={projectTitles[0].title} headline={projectTitles[0].headline} />

                {/* Project Overview */}
                <ProjectOverview
                    role={projectOverview[0].role}
                    team={projectOverview[0].team}
                    duration={projectOverview[0].duration}
                    developmentStack={projectOverview[0].developmentStack}
                    overview={projectOverview[0].overview}
                />

                {/* Design Summary */}
                <ProjectDesign summary={projectInfo[0].design} />
            </Layout>
            <Footer />
        </React.Fragment>
    );
};

export default MovieApp;
