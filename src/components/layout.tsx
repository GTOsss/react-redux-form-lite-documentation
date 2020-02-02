import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Header from "./header"
import './layout.css';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled.div`
  flex-grow: 1;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-height: 40px;
  color: white;
  background-color: #20232A;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrap>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Body>
        <main>{children}</main>
      </Body>
      <Footer>
        © {new Date().getFullYear()}
      </Footer>
    </Wrap>
  )
}

export default Layout
