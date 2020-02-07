import * as React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import NavPanel, { TElement as NavElement } from '../../components/nav-panel';

interface IProps {
}

const Index = React.memo(({}: IProps) => {

  return (
    <Layout>
      examples
    </Layout>
  );
});

export default Index;
