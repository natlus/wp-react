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
    this.loadBlog(this.state.perPage, this.props.params.slug);
  }

  componentDidUpdate(prevProps, prevState) {

    // If state `perPage` changed
    // load more posts
    if (this.state.perPage !== prevState.perPage) {
      this.loadBlog(this.state.perPage, this.props.params.slug);
    }

    // If route parameter `slug` changed
    // reset state `perPage` and `shouldLoadMore`, and reload posts
    else if (this.props.params.slug !== prevProps.params.slug) {
      this.setState({
        perPage: 10,
        shouldLoadMore: true,
      });

      this.loadBlog(this.state.perPage, this.props.params.slug);
    }
  }

  loadBlog = (perPage, slug) => {
    if (slug) {
      getPostsByCategory(perPage, slug)
        .then((posts) => {
          Categories.title = posts[0].metaTitle; // Component title used for breadcrumbs
          this.setState((prevState, props) => ({
            isLoading: false,
            posts: posts,
            shouldLoadMore: posts.length !== prevState.posts.length && posts.length >= perPage,
          }));
        })
    }
  }

  loadMore = () => {
    this.setState((prevState, props) => ({
      perPage: prevState.perPage + 5, // Load more interval
    }));
  }

  render() {
    return this.state.isLoading
      ? <Loading />
      : <BlogLoop
          posts={this.state.posts}
          loadMore={this.loadMore}
          shouldLoadMore={this.state.shouldLoadMore}
          routes={this.props.routes}
        />
  }

}

export default Categories;
