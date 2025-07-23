import React from "react"

import '../styles/global.css'

import Header from "../components/header"
import {rhythm} from "../utils/typography"
import styled from "styled-components"

const Layout = ({ location, title, children }) => {
  const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(36)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  `
  const Footer = styled.div`
    margin-top: ${rhythm(2)};
    font-size: ${rhythm(0.5)};
  `
  return (
    <Container
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--textNormal)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
      }}
    >
      <Header location={location} title={title} />

      <main>{children}</main>
      <Footer>
        Copyright © {new Date().getFullYear()}
      </Footer>
    </Container>
  )
}

export default Layout
