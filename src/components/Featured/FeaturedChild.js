import React from "react";
import { Link } from "gatsby";

const FeaturedChild = ({ name, description, stack, github, livesite, img, hasInfo, slug }) => {
    console.log(hasInfo, slug);
    return (
        <section className="work-item">
            {/* Thumbnail */}
            <img src={img} alt={name} width="500" loading="lazy" />

            {/* Text Content */}
            <div className="content">
                <p className="name">{name}</p>
                <ul className="stack">
                    {stack.map((stack, i) => (
                        <li key={i} id={`stack-item-${i}`}>
                            {stack}
                        </li>
                    ))}
                </ul>
                <div className="description-wrapper">
                    <p className="description">{description}</p>
                </div>

                <div className="ctas">
                    <a rel="noreferrer" href={livesite} className="livesite" target="_blank">
                        View Live Site
                    </a>
                    {github !== null && (
                        <a rel="noreferrer" href={github} className="github" target="_blank">
                            {" "}
                            Github{" "}
                        </a>
                    )}
                    {hasInfo === true && <Link to={slug}>View More</Link>}
                </div>
            </div>
        </section>
    );
};

export default FeaturedChild;
