import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 48px;
  padding: 0 22px;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #eaeaea;

  a {
    text-decoration: none;
    color: #555;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export {
  Header
};
