import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

// Styles
const Section = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 3em;
`

export default function Home() {
  return (
    <>
      <Layout>
        <Section>
          <Title>Your Journey Awaits</Title>
        </Section>
      </Layout>
    </>
  )
}
