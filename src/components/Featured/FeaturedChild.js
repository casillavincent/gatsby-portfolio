import React from "react";

const FeaturedChild = ({ name, description, stack, github, livesite, img }) => {
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
               <a href={livesite} className="livesite" target="_blank">
                  View Live Site
               </a>
               {github !== null && (
                  <a href={github} className="github" target="_blank">
                     {" "}
                     Github{" "}
                  </a>
               )}
            </div>
         </div>
      </section>
   );
};

export default FeaturedChild;
