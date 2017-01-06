import React from 'react';

import BlogLoop from '../../components/BlogLoop';
import Loading from '../../components/Loading';

import { getPosts } from '../../utils/api';

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
      this.loadPosts(this.state.perPage);
    }
  }

  componentDidMount() {
    this.loadPosts(this.state.perPage);
  }

  loadPosts = (perPage) => {
    getPosts(perPage)
      .then((posts) => {
        this.setState(prevState => ({
          isLoading: false,
          posts: posts,
          shouldLoadMore: posts.length !== prevState.posts.length && posts.length >= perPage,
        }));
      });
  }

  loadMore = () => {
    this.setState(prevState => ({
      perPage: this.state.perPage + 5, // Load more interval
    }));
  }

  render() {
    return this.state.isLoading ? <Loading /> : (
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
