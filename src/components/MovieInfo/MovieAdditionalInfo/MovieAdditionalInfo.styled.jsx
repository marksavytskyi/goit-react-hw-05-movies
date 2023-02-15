import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-bottom: 3px solid black;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;

  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Item = styled.li`
  text-align: center;

  padding: 10px;
  height: 30px;
  width: 200px;
`;

export const Link = styled(NavLink)`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 3px;
  background-color: #fff;
  color: black;
  text-decoration: none;
  border-radius: 7px;

  &:not(:last-child) {
    margin-right: 50px;
  }
  &:hover {
    box-shadow: 0px 5px 20px black;
  }
  &.active {
    background-color: #f9ff3c;
  }
`;
