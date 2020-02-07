import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import * as React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  background-color: #20232A;
  height: 50px;
  min-height: 50px;
  display: flex;
  padding: 0 20px;
  position: sticky;
  top: 0;
`;

const Logo = styled(Link)`
  color: #61DAFB;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 20px;
  font-weight: bold;
`;

const NavItem = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 10px;
  transition: color 200ms ease-out;
  
  &:hover {
    color: #61DAFB;
  }
`;

const LeftGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;

interface IProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: IProps) => (
  <HeaderWrap>
    <LeftGroup>
      <Logo to="/">
        {siteTitle}
      </Logo>
      <NavItem to="/api">
        <FormattedMessage id="global.navItemApi" />
      </NavItem>
      <NavItem to="/examples">
        <FormattedMessage id="global.navItemExamples" />
      </NavItem>
    </LeftGroup>
  </HeaderWrap>
);

export default Header;
