import styled from 'styled-components';
import { Link } from 'react-router';

const Categories = styled.div`
  &::before {
    content: "•";
    font-weight: bold;
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const Category = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:not(:last-of-type) {
    &::after {
      content: ",";
    }
  }

  &:not(:first-of-type) {
    padding-left: 4px;
  }
`;

const Content = styled.div`
`;

const Header = styled.header`
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`;

const Title = styled.span`
  color: #000;
  font-size: 14px;

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2 {
    margin: 0;
  }
`;

const Wrapper = styled.article`
  padding: 22px;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  line-height: 150%;

  &:not(:first-of-type) {
    margin-top: 22px;
  }
`;

const Tags = styled.div`
  font-size: 14px;

  &::before {
    content: "Tags: "
  }
`;

const Tag = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:not(:last-of-type) {
    &::after {
      content: ",";
    }
  }

  &:not(:first-of-type) {
    margin-left: 4px;
  }
`;

export {
  Categories,
  Category,
  Content,
  Header,
  Metadata,
  Title,
  Wrapper,
  Tags,
  Tag,
};
