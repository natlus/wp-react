import styled from 'styled-components';

const LoadMore = styled.span`
  display: block;
  width: 100%;
  background: #000;
  color: #fff;
  border-radius: 3px;
  text-align: center;
  padding: 22px;
  margin-top: 22px;
  transition: background 150ms ease;

  &:hover {
    background: #222;
    cursor: pointer;
  }
`;

const LoadMoreNone = styled.h3`
  display: block;
  width: 100%;
  color: #999;
  text-align: center;
  padding: 22px;
  margin-bottom: 0;
  margin-top: 22px;
`

export {
  LoadMore,
  LoadMoreNone,
};
