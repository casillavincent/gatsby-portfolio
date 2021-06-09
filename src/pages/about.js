import React from "react";
import Layout from "../components/Layout";
import Hero from "../assets/astronaut.svg";
import { myStack, technicalSkills } from "../globals/myStack";
import TopBtn from "../components/Widgets/TopBtn";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

const about = () => {
    return (
        <React.Fragment>
            <Header />
            <Layout>
                <TopBtn />
                {/* Summary - Above the Fold */}
                <article className="about-summary">
                    {/* Banner */}
                    <img src={Hero} alt="Astronaut in space" width="500" />

                    {/* Summary Content */}
                    <div className="content">
                        <h1>About Me</h1>

                        <p className="headline">Creative problem solver</p>
                        <p className="summary">
                            Jumping into web development has taught me that the only prerequisite to
                            learning how to write code is to be inquisitive. As someone who is
                            adapted to challenges and solving problems, this industry has managed to
                            engage my creativity and structured thinking.
                        </p>

                        <p className="summary">
                            I aim to build user interfaces that create a seamless online experience
                            by leveraging new front-end technologies with design fundamentals.
                        </p>
                        <p className="summary">
                            When I’m not sitting in front of my laptop coding away, you’ll most
                            likely find me first in line at a new boba place, watching my stocks
                            crumble, boxing and exploring music.
                        </p>
                    </div>
                </article>

                {/* My Stack list */}
                <article className="my-stack">
                    <div className="my-stack-inner-container">
                        {/* Tech Stack */}
                        <div className="stack-list">
                            <h2>Tech Stack</h2>
                            <ul className="stack-ul">
                                {myStack.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="technical-skills">
                            <h2>Technical Skills</h2>
                            <ul className="technical-skills-ul">
                                {technicalSkills.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </article>
                <Contact />
            </Layout>
            <Footer />
        </React.Fragment>
    );
};

export default about;
