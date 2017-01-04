import React from 'react';
import { Link } from 'react-router';

import Container from '../../components/Container';
import { Bar, Crumb } from './styles';

const Breadcrumbs = ({ routes }) => {
  const list = routes.map((route, index) => {
    return (index + 1) !== routes.length
      ? (
        <Crumb key={index}>
          <Link to={route.path}>
            { route.component.title || route.name }
          </Link>
        </Crumb>
      )
      : (
        <Crumb last key={index}>
          { route.component.title || route.name }
        </Crumb>
      )
  })

  return (
    <Container>
      <Bar>
        {list}
      </Bar>
    </Container>
  )
}

Breadcrumbs.propTypes = {
  routes: React.PropTypes.array.isRequired,
};

export default Breadcrumbs;
