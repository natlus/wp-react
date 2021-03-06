import React from 'react';
import { Link } from 'react-router';

import { Bread, Crumb } from './styles';

const Breadcrumbs = ({ routes }) => (
  <Bread>
    {routes.map((route, index) => (
      <Crumb key={index} last={index + 1 === routes.length}>
        {index + 1 !== routes.length
          ? <Link to={route.path}>
              {route.component.title || route.name}
            </Link>
          : route.component.title || route.name}
      </Crumb>
    ))}
  </Bread>
);

Breadcrumbs.propTypes = {
  routes: React.PropTypes.array.isRequired,
};

export default Breadcrumbs;
