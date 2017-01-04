import React from 'react';

import BlogPost from '../../components/BlogPost';
import Container from '../../components/Container';
import Breadcrumbs from '../../components/Breadcrumbs';
import { LoadMore } from './styles';


const BlogLoop = ({ posts, loadMore, shouldLoadMore, routes }) => {
  const postLoop = posts.map((post, index) => (
    <BlogPost
      key={index}
      title={post.title}
      content={post.excerpt}
      date={post.date}
      categories={post.categories}
      tags={post.tags}
      slug={post.slug}
    />
  ));

  const loadMoreMarkup = shouldLoadMore
    ? <LoadMore onClick={loadMore}>Load more</LoadMore>
    : <LoadMore empty>No more posts</LoadMore>

  return (
    <Container>
      <Breadcrumbs routes={routes} />
      {postLoop}
      {loadMoreMarkup}
    </Container>
  )
};

BlogLoop.propTypes = {
  posts: React.PropTypes.array.isRequired,
  loadMore: React.PropTypes.func.isRequired,
  shouldLoadMore: React.PropTypes.bool.isRequired,
  routes: React.PropTypes.array,
};

export default BlogLoop;
