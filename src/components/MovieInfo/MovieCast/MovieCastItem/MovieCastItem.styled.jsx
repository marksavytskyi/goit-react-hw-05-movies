import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 5px;
`;
export const Image = styled.img`
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  letter-spacing: 3px;

  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Character = styled.p`
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 500;
`;
