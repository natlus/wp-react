import styled from 'styled-components';

const LoadMore = styled.span`
  display: block;
  width: 100%;
  background: ${(props) => props.empty ? 'transparent' : '#000' };
  color: ${(props) => props.empty ? '#000' : '#fff'};
  border-radius: 3px;
  text-align: center;
  padding: 22px;
  margin-top: 22px;
  transition: background 150ms ease;

  &:hover {
    background: ${(props) => props.empty ? 'transparent' : '#222' };
    cursor: ${(props) => props.empty ? 'default' : 'pointer' };
  }
`;

export {
  LoadMore,
};
