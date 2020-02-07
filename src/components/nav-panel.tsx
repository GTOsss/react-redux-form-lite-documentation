import * as React from 'react';
import styled from 'styled-components';

const Wrap = styled.nav`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #f2f2f2;
  border-left: 1px solid #d5d5d5;
`;

const Elements = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px 0;
`;

const Element = styled.li`
  margin: 0;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    color: #6a6a6a;
  }
`;

export type TElement = {
  id: number | string;
  label: string;
}

interface IProps {
  elements: Array<TElement>
}

const NavPanel = React.memo(({ elements }: IProps) => {

  return (
    <Wrap>
      <Elements>
        {elements.map(({ id, label }) => (
          <Element key={id}>
            {label}
          </Element>
        ))}
      </Elements>
    </Wrap>
  );
});

export default NavPanel;
