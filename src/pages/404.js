import React from "react"
import styled from "styled-components"

/* Styled Components */
const Article = styled.article`
  width: 100%;
  height: 100vh;
  padding: 25px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`
const Title = styled.h1`
  font-size: 3em;
`

const Description = styled.h2`
  font-size: 2em;
`
const PageNotFound = () => {
  return (
    <Article>
      <Title>404</Title>
      <Description>Page Not Found</Description>
    </Article>
  )
}

export default PageNotFound
