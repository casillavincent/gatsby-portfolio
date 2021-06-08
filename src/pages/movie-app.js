import React from "react";
import Layout from "../components/Layout";
import ProjectOverview from "../components/ProjectComponents/ProjectOverview";
import ProjectTitle from "../components/ProjectComponents/ProjectTitle";
import { projectTitles, projectOverview } from "../globals/info";

const MovieApp = () => {
    return (
        <Layout>
            <ProjectTitle title={projectTitles[0].title} headline={projectTitles[0].headline} />
            <ProjectOverview
                role={projectOverview[0].role}
                team={projectOverview[0].team}
                duration={projectOverview[0].duration}
                developmentStack={projectOverview[0].developmentStack}
                overview={projectOverview[0].overview}
            />
        </Layout>
    );
};

export default MovieApp;
