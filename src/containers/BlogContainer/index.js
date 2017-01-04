import React, { Component } from 'react';

import Index from '../../containers/Index';
import Breadcrumbs from '../../components/Breadcrumbs';

class BlogContainer extends Component {

  render() {
    return !this.props.params.slug
    ? (
      <div>
        <Breadcrumbs routes={this.props.routes} />
        <Index />
      </div>
    )
    : (
      <div>
        <Breadcrumbs routes={this.props.routes} />
        {this.props.children}
      </div>
    )
  }
}

export default BlogContainer;
