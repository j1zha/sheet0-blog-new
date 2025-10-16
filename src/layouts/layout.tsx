import React from "react"

import styled, { ThemeProvider } from "styled-components"

import Footer from "~/src/components/footer"
import Header from "~/src/components/header"
import useTheme from "~/src/hooks/useTheme"
import ThemeContext from "~/src/stores/themeContext"
import GlobalStyle from "~/src/styles/globalStyle"
import styledTheme from "~/src/styles/styledTheme"


const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={styledTheme}>
      <ThemeContext.Provider value={theme}>
        <GlobalStyle />
        <Header />
        <Container>
          {children}
        </Container>
        <Footer />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  background-color: var(--color-post-background);
`


export default Layout
