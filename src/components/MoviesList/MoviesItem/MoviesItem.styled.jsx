import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  background-color: #f9ff3c;
  width: 300px;
  text-align: center;
  padding: 7px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  &:hover {
    box-shadow: 0px 5px 20px black;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
