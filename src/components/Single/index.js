import React from 'react';

import Container from '../../components/Container';
import BlogPost from '../../components/BlogPost';

const Single = ({ post }) => (
  <Container>
    <BlogPost
      title={post.title}
      content={post.content}
      date={post.date}
      categories={post.categories}
      tags={post.tags}
    />
  </Container>
);

Single.propTypes = {
  post: React.PropTypes.object,
};

export default Single;
