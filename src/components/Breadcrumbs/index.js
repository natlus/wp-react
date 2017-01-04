import React from 'react';

import Container from '../../components/Container';
import { Bar, Crumb, CrumbNoLink } from './styles';

const Breadcrumbs = ({ routes }) => {
  const list = routes.map((route, index) => {
    console.log(route.component);
    return (index + 1) !== routes.length
      ? (
        <Crumb key={index} to={route.path}>
          { route.component.title || route.name }
        </Crumb>
      )
      : (
        <CrumbNoLink key={index}>
          { route.component.title || route.name }
        </CrumbNoLink>
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
