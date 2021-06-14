import React from "react";
import styled from "styled-components";

const ProjectDesign = ({ summary }) => {
    return (
        <Article className="project-design">
            <Div className="inner-project-design">
                <Title className="design-title">Design</Title>
                <Summary className="design-summary">{summary}</Summary>
            </Div>
        </Article>
    );
};

export default ProjectDesign;

/* Component Styles */
const Article = styled.article`
    width: 100%;
    height: auto;
    border: 1px dashed red;
    max-width: 75%;
    margin: auto;
    @media screen and (min-width: 50em) {
        max-width: 1000px;
        padding: 35px;
    }
`;
const Div = styled.div``;

const Title = styled.p`
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 5px;
    color: #f55f44;
`;

const Summary = styled.p`
    line-height: 2;
`;
