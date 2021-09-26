import React, { useEffect, useState } from "react";

const Mission = () => {
    const [isDesktop, setIsDesktop] = useState(null);

    /* This event listener will change the state of isDesktop ONCE. Only when it passes the desired breakpoint */

    useEffect(() => {
        const mql = window.matchMedia("(min-width: 50em)");
        function checkMQL() {
            if (mql.matches) {
                setIsDesktop(true);
            } else {
                setIsDesktop(false);
            }
        }
        mql.addEventListener("change", checkMQL);
        checkMQL();
    });
    return (
        <article className="my-work-summary">
            <h2>My Work</h2>
            <div className="description">
                <p>
                    I am passionate about creating interactive and reusable UI components that
                    implement design thinking principles, UX research and web development best
                    practices. With all my projects I take account ...
                </p>
            </div>

            {/* Size of icons will change based on if it is desktop or mobile */}
            {isDesktop === true ? (
                <section className="highlights-items">
                    {/* Semantic Code */}
                    <div className="highlight-item">
                        <lord-icon
                            src="https://cdn.lordicon.com//nocovwne.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#f55f44"
                            style={{ width: "90px", height: "90px" }}
                        ></lord-icon>
                        <p>Semantic and Scalable Code</p>
                    </div>

                    {/* Fully Responsive */}
                    <div className="highlight-item">
                        <lord-icon
                            src="https://cdn.lordicon.com//rbwzsktr.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#f55f44"
                            style={{ width: "90px", height: "90px" }}
                        ></lord-icon>
                        <p>Responsive Design</p>
                    </div>

                    {/* Search Engine Optimization */}
                    <div className="highlight-item">
                        <lord-icon
                            src="https://cdn.lordicon.com//msoeawqm.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#f55f44"
                            style={{ width: "90px", height: "90px" }}
                        ></lord-icon>
                        <p>Search Engine Optimization</p>
                    </div>

                    {/* Design Fundamentals */}
                    <div className="highlight-item">
                        <lord-icon
                            src="https://cdn.lordicon.com//wloilxuq.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#f55f44"
                            style={{ width: "90px", height: "90px" }}
                        ></lord-icon>
                        <p>Design Fundamentals</p>
                    </div>
                </section>
            ) : (
                <section className="highlights-items">
                    {/* Semantic Code */}
                    <div className="highlight-item">
                        <lord-icon
                            src="https://cdn.lordicon.com//nocovwne.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#f55f44"
                            style={{ width: "75px", height: "75px" }}
                        ></lord-icon>
                        <p>Semantic and Scalable Code</p>
                    </div>

                    {/* Fully Responsive */}
                    <div className="highlight-item">
                        <lord-icon
                            src="https://cdn.lordicon.com//rbwzsktr.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#f55f44"
                            style={{ width: "75px", height: "75px" }}
                        ></lord-icon>
                        <p>Responsive Design</p>
                    </div>

                    {/* Search Engine Optimization */}
                    <div className="highlight-item">
                        <lord-icon
                            src="https://cdn.lordicon.com//msoeawqm.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#f55f44"
                            style={{ width: "75px", height: "75px" }}
                        ></lord-icon>
                        <p>Search Engine Optimization</p>
                    </div>

                    {/* Design Fundamentals */}
                    <div className="highlight-item">
                        <lord-icon
                            src="https://cdn.lordicon.com//wloilxuq.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#f55f44"
                            style={{ width: "75px", height: "75px" }}
                        ></lord-icon>
                        <p>Design Fundamentals</p>
                    </div>
                </section>
            )}
        </article>
    );
};

export default Mission;
