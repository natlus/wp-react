import React from 'react';
import { Link } from 'react-router';

import Container from '../../components/Container';
import { Header } from './styles';

const Navigation = () => (
  <Container>
    <Header>
      <Link to='/blog'>Blog</Link>
    </Header>
  </Container>
);

export default Navigation;
