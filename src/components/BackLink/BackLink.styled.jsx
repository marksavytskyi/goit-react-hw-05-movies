import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;

  text-decoration: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: black;
  background-color: white;

  &:hover {
    box-shadow: 0px 5px 20px black;
    background-color: #f9ff3c;
  }
`;
