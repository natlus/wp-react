import styled from 'styled-components';

const Bread = styled.nav`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 22px;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 3px;
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
  color: #000;
  font-size: 13px;
  text-decoration: none;
  opacity: ${(props) => props.last ? '0.35' : '1'};
  pointer-events: ${(props) => props.last ? 'none' : 'all'};

  &:not(:last-of-type) {
    background: #fff;
    z-index: 1;

    &::after {
      content: "";
      height: 17px;
      width: 17px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate3d(6px, -50%, 0) rotate(45deg);
      background: #fff;
      border: 1px solid #eaeaea;
      border-bottom-color: transparent;
      border-left-color: transparent;
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
