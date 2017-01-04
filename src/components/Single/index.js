import React from 'react';

import Container from '../../components/Container';
import BlogPost from '../../components/BlogPost';
import Breadcrumbs from '../../components/Breadcrumbs';

const Single = ({ post, routes }) => (
  <Container>
    <Breadcrumbs routes={routes} />
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
  post: React.PropTypes.object.isRequired,
  routes: React.PropTypes.array.isRequired,
};

export default Single;
