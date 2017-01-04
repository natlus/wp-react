import styled from 'styled-components';
import { Link } from 'react-router';

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

const Crumb = styled(Link)`
  color: #000;
  font-size: 14px;
  text-decoration: none;
`;

const CrumbNoLink = styled.span`
  color: #999;
  font-size: 14px;
`;

export {
  Bar,
  Crumb,
  CrumbNoLink,
};
