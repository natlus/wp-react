import React from 'react';

import BlogLoop from '../../components/BlogLoop';
import Loading from '../../components/Loading';

import { getPostsByCategory } from '../../utils/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      perPage: 10,
      posts: [],
      shouldLoadMore: true,
    }
  }

  componentDidMount() {
    this.loadPosts(this.state.perPage, this.props.params.slug);
  }

  componentDidUpdate(prevProps, prevState) {

    // If state `perPage` changed
    // load more posts
    if (this.state.perPage !== prevState.perPage) {
      this.loadPosts(this.state.perPage, this.props.params.slug);
    }

    // If route parameter `slug` changed
    // reset state `perPage` and `shouldLoadMore`, and reload posts
    else if (this.props.params.slug !== prevProps.params.slug) {
      this.setState({
        perPage: 10,
        shouldLoadMore: true,
      });

      this.loadPosts(this.state.perPage, this.props.params.slug);
    }
  }

  async loadPosts(perPage, slug) {
    try {
      const posts = await getPostsByCategory(perPage, slug);

      Categories.title = posts[0].metaTitle; // Component title used for breadcrumbs

      this.setState(prevState => ({
        isLoading: false,
        posts: posts,
        shouldLoadMore: posts.length !== prevState.posts.length && posts.length >= perPage,
      }));
    } catch(error) {
      console.error(error);
    }
  }

  loadMore() {
    this.setState(prevState => ({
      perPage: prevState.perPage + 5, // Load more interval
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

export default Categories;
