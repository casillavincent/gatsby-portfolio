import React from "react";
import FeaturedChild from "./FeaturedChild";

/* Import Thumbnails */
import Thumb1 from "../../assets/project-thumbnails/capstone.png";
import Thumb2 from "../../assets/project-thumbnails/jynx.png";
import Thumb3 from "../../assets/project-thumbnails/movie.png";
import Thumb4 from "../../assets/project-thumbnails/portfolio.png";
import Thumb5 from "../../assets/project-thumbnails/mercedes.png";

/* Data to pass as props */
const featured = [
    {
        name: "Yaeger",
        description: "Custom built WordPress theme. A photography portfolio. More info on Github.",
        stack: ["WordPress", "PHP", "Sass", "HTML5"],
        github: "https://github.com/casillavincent/yaeger",
        livesite: "http://portfolio.vcasilla.com/",
        img: Thumb5,
        info: false,
        router: null,
        slug: "mercedes",
    },
    {
        name: "Jynx Media",
        description: "A digital agency where creativity meets innovation.",
        stack: ["ReactJS", "Sass", "CSS3", "Github"],
        github: "https://github.com/casillavincent/jynx-media",
        livesite: "https://jynx.vcasilla.com/",
        img: Thumb2,
        info: false,
        router: null,
        slug: "jynx",
    },
    {
        name: "Butter.DB",
        description: "Get updates on movies you want to see. ",
        stack: ["ReactJS", "HTML5", "Sass", "Git", "REST API"],
        github: "https://github.com/casillavincent/movie-app",
        livesite: "https://vcasilla.com/butter-db/",
        img: Thumb3,
        info: true,
        router: "/butter-db-project",
        slug: "/movie-app",
    },
    {
        name: "The Rolling Pin",
        description: "An eCommerce website for an artisanal bakery.",
        stack: ["WordPress", "jQuery", "MySQL", "PHP", "Github"],
        github: null,
        livesite: "https://vcasilla.com/the-rolling-pin/",
        img: Thumb1,
        info: true,
        router: "/the-rolling-pin-project",
        slug: "rollingpin",
    },
    {
        name: "Portfolio",
        description: "A SPA that showcases my technical projects as a front-end web developer.",
        stack: ["ReactJS", "JavaScript", "Sass"],
        github: "https://github.com/casillavincent/casillavincent-portfolio",
        livesite: "https://vcasilla.com/",
        img: Thumb4,
        info: true,
        router: "/personal-portfolio-project",
        slug: "portfolio",
    },
];

const FeaturedWork = () => {
    return (
        <article className="featured-work">
            {featured.map((item, i) => (
                <FeaturedChild
                    name={item.name}
                    stack={item.stack}
                    description={item.description}
                    img={item.img}
                    livesite={item.livesite}
                    github={item.github}
                    key={i}
                    hasInfo={item.info}
                    slug={item.slug}
                />
            ))}
        </article>
    );
};

export default FeaturedWork;
