import React from "react";

const ProjectOverview = ({ developmentStack, role, team, duration, overview }) => {
    return (
        <article className="project-overview">
            {/* Overview */}
            <section className="overview">
                <h2>Overview</h2>
                <p>{overview}</p>
            </section>

            {/* Team Member(s) */}
            <section className="team">
                <h2>Team Members</h2>
                <p>{team}</p>
            </section>

            {/* Role */}
            <section className="role">
                <h2>Role</h2>
                <p>{role}</p>
            </section>

            {/* Development Stack */}
            <section className="stack">
                <h2>Development Stack</h2>
                <ul className="overview-stack-ul">
                    {developmentStack.map((stack, i) => (
                        <li key={i}>{stack}</li>
                    ))}
                </ul>
            </section>

            {/* Duration */}
            <section className="duration">
                <h2>Duration</h2>
                <p>{duration}</p>
            </section>
        </article>
    );
};

export default ProjectOverview;
