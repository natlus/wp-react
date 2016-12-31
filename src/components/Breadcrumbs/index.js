import React from 'react';

import { Bar, Crumb, Current } from './styles';

const Breadcrumbs = ({ youAreHere }) => {

  const current = youAreHere ? <Current>{youAreHere}</Current> : false;

  return (
    <Bar>
      <Crumb to="/blog">Blog</Crumb>
      {current}
    </Bar>
  )
}

Breadcrumbs.propTypes = {
};

export default Breadcrumbs;
