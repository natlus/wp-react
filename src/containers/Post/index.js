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
    this.loadPosts(this.props.params.slug)
  }

  async loadPosts(perPage) {
    try {
      const posts = await getSinglePost(this.props.params.slug);

      Post.title = posts[0].title; // Component title used for breadcrumbs.

      this.setState({
        isLoading: false,
        post: posts[0],
      });
    } catch(error) {
      console.error(error);
    }
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
