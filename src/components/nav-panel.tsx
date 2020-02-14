import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

const Wrap = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  border-left: 1px solid #d5d5d5;
  width: 350px;
  min-height: 100vh;
`

const WrapInner = styled.div`
  position: fixed;
  top: 50px;
`

const Elements = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px 0;
`

const Element = styled.li`
  margin: 0;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    color: #6a6a6a;
  }
  
  .link {
    border-left: 4px solid transparent;  
    color: black;
    text-decoration: none;
    padding-left: 6px;
    display: block;
    height: 100%;
    
    :hover {
      color: #838383;
    }
  }
  
  .link-active {
    border-left: 4px solid #61DAFB;
    font-weight: bold;
  }
`

export type TElement = {
  id: number | string;
  label: string;
  link: string;
}

interface IProps {
  elements: Array<TElement>
}

const NavPanel = React.memo(({ elements }: IProps) => {

  return (
    <Wrap>
      <WrapInner>
        <Elements>
          {elements.map(({ id, label, link }) => (
            <Element key={id}>
              <Link to={link} className="link" activeClassName="link-active">
                {label}
              </Link>
            </Element>
          ))}
        </Elements>
      </WrapInner>
    </Wrap>
  )
})

export default NavPanel
