import React from "react";

const ProjectTitle = ({ title, headline }) => {
    return (
        <section className="project-title">
            <div className="inner-project-title-overlay">
                <h1 className="title">{title}</h1>
                <p className="headline">{headline}</p>
            </div>
        </section>
    );
};

export default ProjectTitle;
