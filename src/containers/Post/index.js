import React from 'react';

import Single from '../../components/Single';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';

import { getSinglePost } from '../../utils/api';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      post: {},
    }
  }

  componentDidMount() {
    this.loadBlog(this.props.params.slug)
  }

  loadBlog = (slug) => {
    getSinglePost(this.props.params.slug)
      .then((post) => {
        Post.title = post[0].title; // Component title used for breadcrumbs.
        this.setState({
          isLoading: false,
          post: post[0],
        });
      });
  }

  render() {
    return this.state.isLoading ? <Loading /> : (
      !this.state.post
        ? <NotFound />
        : <Single post={this.state.post} routes={this.props.routes} />
    )
  }

}

export default Post;
