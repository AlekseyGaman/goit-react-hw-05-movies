import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding-top: 80px;
  padding-bottom: 50px;
  background: #fff;
  margin-bottom: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const LinkNav = styled(NavLink)`
  display: flex;
  justify-content: center;
  font-size: 25px;

  &:focus,
  :hover {
    color: #ce4d45;
    transform: scale(1.1);
    font-weight: 500;
    text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
      1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
      4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
      4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
      7px 6px 1px #cccccc;
  }
`;
