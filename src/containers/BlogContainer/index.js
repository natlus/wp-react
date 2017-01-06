import React, { Component } from 'react';

import Index from '../../containers/Index';

class BlogContainer extends Component {
  render() {
    return this.props.params.slug
      ? this.props.children
      : <Index routes={this.props.routes} />
  }
}

export default BlogContainer;
