import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'

type Props = {
  title?: string
  children?: ReactNode
}

const Layout = ({ children, title = 'Green | Login Example' }: Props) => (
  <div>
    <GlobalStyles />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Main>{children}</Main>
  </div>
)

export default Layout

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'Gotham';
  src: url('/fonts/Gotham-Medium.woff2') format('woff2'),
    url('/fonts/Gotham-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

  * {
    font-family: 'Gotham', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    background-color: #eee;
  }
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`
