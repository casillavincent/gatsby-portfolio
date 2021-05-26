import React, { useEffect } from "react"
import Header from "./Header"
import GlobalStyle from "../theme/globals"
import { ThemeProvider } from "styled-components"
import Theme from "../theme/theme"

const Layout = ({ children }) => {
  useEffect(() => {
    console.log(Theme)
  }, [])

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header />
        <div className="wrapper">
          <main className="site-main">{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
