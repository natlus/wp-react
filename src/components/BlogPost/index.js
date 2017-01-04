import React from 'react';
import timeago from 'timeago.js';

import {
  Categories,
  Category,
  Content,
  Header,
  Metadata,
  Title,
  TitleLink,
  Wrapper,
  Tags,
  Tag,
} from './styles.js';

function createMarkup(html) {
  return {__html: html};
}

const BlogPost = ({ title, content, date, slug, categories, tags }) => {
  const timeagoInstance = new timeago();

  const categoriesMarkup = categories.length > 0
    ? (
      <Categories>
        {
          categories.map((category, index) => (
            <Category to={`/blog/category/${category.slug}`} key={index}>
              {category.name}
            </Category>
          ))
        }
      </Categories>
    )
    : false;

  const tagMarkup = tags.length > 0
    ? (
      <Tags>
        {
          tags.map((tag, index) => (
            <Tag key={index} to={`/blog/tag/${tag.slug}`}>
              {tag.name}
            </Tag>
          ))
        }
      </Tags>
    )
    : false;

  const titleMarkup = slug
    ? (
      <TitleLink to={`/blog/post/${slug}`}>
        <h2>{title}</h2>
      </TitleLink>
    )
    : (
      <Title>
        {title}
      </Title>
    )

  return (
    <Wrapper>
      <Header>
        {titleMarkup}
        <Metadata>
          <date>
            { timeagoInstance.format(date) }
          </date>
          {categoriesMarkup}
        </Metadata>
      </Header>
      <Content dangerouslySetInnerHTML={ createMarkup(content) } />
      {tagMarkup}
    </Wrapper>
  )
};

BlogPost.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  slug: React.PropTypes.string,
  categories: React.PropTypes.array,
  tags: React.PropTypes.array,
};

export default BlogPost;
