import styled from 'styled-components';

const Bread = styled.nav`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  margin-bottom: 22px;
`;

const Crumb = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 24px;
  margin: 0 4px;
  padding: 0 12px;
  border-right: 0;

  color: ${(props) => props.last ? '#999' : '#000'};
  font-size: 14px;
  text-decoration: none;
  pointer-events: ${(props) => props.last ? 'none' : 'all'};

  &:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &:last-of-type {
    ${''/* border-right: 1px solid #eaeaea;*/}
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &:not(:last-of-type) {
    background: #fff;
    z-index: 1;

    &::after {
      content: "";
      display: block;
      height: 17px;
      width: 17px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate3d(6px, -50%, 0) rotate(45deg);
      background: #fff;
      border: 1px solid #eaeaea;
      border-bottom: 1px solid transparent;
      border-left: 1px solid transparent;
      border-radius: 3px;
      z-index: -1;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export {
  Bread,
  Crumb,
};
