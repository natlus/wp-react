import React from 'react';

import BlogPost from '../../components/BlogPost';
import Container from '../../components/Container';
import { LoadMore } from './styles';


const BlogLoop = ({ posts, loadMore, shouldLoadMore, param, routes }) => {
  const postLoop = posts.map((post, index) => (
    <BlogPost
      key={index}
      title={post.title}
      content={post.content}
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
      {postLoop}
      {loadMoreMarkup}
    </Container>
  )
};

BlogLoop.propTypes = {
  posts: React.PropTypes.array.isRequired,
  loadMore: React.PropTypes.func.isRequired,
  shouldLoadMore: React.PropTypes.bool.isRequired,
};

export default BlogLoop;
