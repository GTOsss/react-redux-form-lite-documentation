import * as React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

const Element = styled.div`
  display: flex;
  flex: 1;
  padding: 8px;
`;

interface IProps {
  children: [React.ReactNode, React.ReactNode];
}

const BodyExample = React.memo(({
  children,
}: IProps) => {

  return (
    <Row>
      <Element>
        {children[0]}
      </Element>
      <Element>
        {children[1]}
      </Element>
    </Row>
  );
});

export default BodyExample;
