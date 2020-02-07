import * as React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const MainTitle = styled.h1`
  margin-top: 10px;
  font-size: 30px;
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainTitle>
      <FormattedMessage id="index.h1" values={{ br: <br /> }} />
    </MainTitle>
  </Layout>
);

export default IndexPage;
