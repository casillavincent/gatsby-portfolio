import React from "react";

// Icons
import { GoLightBulb } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { VscTools } from "react-icons/vsc";

const ProjectOverview = ({ developmentStack, role, team, duration, overview }) => {
    return (
        <article className="project-overview">
            <div className="project-overview__inner">
                {/* Overview */}
                <section className="overview">
                    <h2>
                        <span className="heading-icon">
                            <GoLightBulb />
                        </span>
                        Overview
                    </h2>
                    <p>{overview}</p>
                </section>

                {/* Team Member(s) */}
                <section className="team">
                    <h2>
                        <span className="heading-icon">
                            <FiUsers />
                        </span>
                        Team Members
                    </h2>
                    <p>{team}</p>
                </section>

                {/* Role */}
                <section className="role">
                    <h2>
                        <span className="heading-icon">
                            <AiOutlineFire />
                        </span>
                        Role
                    </h2>
                    <p>{role}</p>
                </section>

                {/* Development Stack */}
                <section className="stack">
                    <h2>
                        <span className="heading-icon">
                            <VscTools />
                        </span>
                        Development Stack
                    </h2>
                    <ul className="overview-stack-ul">
                        {developmentStack.map((stack, i) => (
                            <li key={i}>{stack}</li>
                        ))}
                    </ul>
                </section>

                {/* Duration */}
                <section className="duration">
                    <h2>
                        <span className="heading-icon">
                            <IoIosTimer />
                        </span>
                        Duration
                    </h2>
                    <p>{duration}</p>
                </section>
            </div>
            {/* end of inner */}
        </article>
    );
};

export default ProjectOverview;
