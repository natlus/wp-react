import React from 'react';

import Container from '../../components/Container';
import BlogPost from '../../components/BlogPost';
import Breadcrumbs from '../../components/Breadcrumbs';

const Single = ({ post }) => (
  <Container>
    <Breadcrumbs youAreHere={post.title} />
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
