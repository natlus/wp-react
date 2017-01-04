import React from 'react';

import BlogLoop from '../../components/BlogLoop';
import Loading from '../../components/Loading';
import { loadPosts } from '../../helpers/request';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      perPage: 10,
      posts: [],
      shouldLoadMore: true,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // If state `perPage` changed
    // load more posts
    if (this.state.perPage !== prevState.perPage) {
      this.callLoadPosts(this.state.perPage);
    }
  }

  componentDidMount() {
    this.callLoadPosts(this.state.perPage);
  }

  callLoadPosts = (perPage) => {
    loadPosts(perPage)
      .then((posts) => {
        this.setState((prevState, props) => ({
          isLoading: false,
          posts: posts,
          shouldLoadMore: posts.length !== prevState.posts.length && posts.length >= perPage,
        }));
      });
  }

  loadMore = () => {
    this.setState((prevState, props) => ({
      perPage: this.state.perPage + 5, // Load more interval
    }));
  }

  render() {
    return this.state.isLoading
    ? <Loading />
    : (
      <BlogLoop
          posts={this.state.posts}
          loadMore={this.loadMore}
          shouldLoadMore={this.state.shouldLoadMore}
          routes={this.props.routes}
        />
    )
  }

}

export default Index;
