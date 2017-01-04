import React, { Component } from 'react';

import Index from '../../containers/Index';

class BlogContainer extends Component {
  render() {
    return !this.props.params.slug
    ? <Index routes={this.props.routes} />
    : this.props.children
  }
}

export default BlogContainer;
