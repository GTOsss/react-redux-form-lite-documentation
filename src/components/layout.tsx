import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import NavPanel, { TElement as NavElement } from "./nav-panel"
import { FormattedMessage } from "gatsby-plugin-intl"
import "./layout.css"

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Body = styled.div`
  display: flex;
  flex-grow: 1;
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-height: 40px;
  color: white;
  background-color: #20232A;
`

const Main = styled.main`
  flex-grow: 1;
  padding: 10px 30px;
`

type NavElementsKey = "examples" | "api";

type NavElementsMap = {
  [key in NavElementsKey]: Array<NavElement>;
};

const navElementsMap: NavElementsMap = {
  examples: [
    {
      id: 0,
      label: <FormattedMessage id="innerNavbar.examples.simpleForm" />,
      link: "/examples/simple-form",
    },
    {
      id: 1,
      label: <FormattedMessage id="innerNavbar.examples.syncValidation" />,
      link: "/examples/sync-validation",
    },
    {
      id: 2,
      label: <FormattedMessage id="innerNavbar.examples.fieldLevelValidation" />,
      link: "/examples/field-level-validation",
    },
    {
      id: 3,
      label: <FormattedMessage id="innerNavbar.examples.initialValues" />,
      link: "/examples/initial-values",
    },
    {
      id: 4,
      label: <FormattedMessage id="innerNavbar.examples.initializeFromState" />,
      link: "/examples/initial-values-with-set",
    },
    {
      id: 5,
      label: <FormattedMessage id="innerNavbar.examples.fieldArray" />,
      link: "/examples/field-array",
    },
    {
      id: 6,
      label: <FormattedMessage id="innerNavbar.examples.wizardForm" />,
      link: "/examples/wizard-form",
    },
  ],
  api: [
    {
      id: 0,
      label: "reduxForm",
      link: "",
    },
  ],
}

interface IProps {
  children: React.ReactNode;
  navPanelKey?: NavElementsKey,
}

const Layout = ({
  children,
  navPanelKey,
}: IProps) => {
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
        <Main>{children}</Main>
        {navPanelKey ? <NavPanel elements={navElementsMap[navPanelKey]} /> : null}
      </Body>
      <Footer>
        © {new Date().getFullYear()}
      </Footer>
    </Wrap>
  )
}

export default Layout
