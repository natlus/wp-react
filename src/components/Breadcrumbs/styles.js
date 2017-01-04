import styled from 'styled-components';

const Bar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  > * {
    padding: 4px 8px;
    background: #fff;
    border: 1px solid #eaeaea;
    border-right: 0;

    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:last-child {
      border-right: 1px solid #eaeaea;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;

const Crumb = styled.span`
  color: ${(props) => props.last ? '#999' : '#000'};
  font-size: 14px;
  text-decoration: none;
  pointer-events: ${(props) => props.last ? 'none' : 'all'};

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export {
  Bar,
  Crumb,
};
