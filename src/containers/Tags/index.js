import React from 'react';

import BlogLoop from '../../components/BlogLoop';
import Loading from '../../components/Loading';
import { loadPostsByTag } from '../../helpers/request';

class Tags extends React.Component {
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
      loadPostsByTag(perPage, slug)
        .then((posts) => {
          Tags.title = posts[0].metaTitle; // Component title used for breadcrumbs
          this.setState({
            isLoading: false,
            posts: posts,
            shouldLoadMore: posts.length !== this.state.posts.length,
          });
        })
    }
  }

  loadMore = () => {
    this.setState({
      perPage: this.state.perPage + 5, // Load more interval
    });
  }

  render() {
    return this.state.isLoading
      ? <Loading />
      : <BlogLoop
          posts={this.state.posts}
          loadMore={this.loadMore}
          shouldLoadMore={this.state.shouldLoadMore}
          param={this.props.params.slug}
          routes={this.props.routes}
        />
  }

}

export default Tags;
