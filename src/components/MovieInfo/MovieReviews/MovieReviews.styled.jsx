import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: 50px;
`;
export const Item = styled.li`
  padding: 20px;
  border: 1px solid white;
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Author = styled.h3`
  margin-bottom: 20px;
  letter-spacing: 1px;
`;
export const Content = styled.p``;
