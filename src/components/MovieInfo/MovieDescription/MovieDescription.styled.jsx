import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  border-radius: 10px;
  background-color: rgba(249, 255, 60);
`;
export const Image = styled.img`
  border-radius: 10px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  letter-spacing: 3px;
  margin-bottom: 30px;
`;
export const Popular = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const OverviewTitle = styled.h2`
  margin-bottom: 10px;
  letter-spacing: 3px;
`;
export const OverviewText = styled.p`
  margin-bottom: 20px;
`;
export const GenresTitle = styled.h2`
  letter-spacing: 3px;

  margin-bottom: 10px;
`;
export const GenresText = styled.p`
  font-size: 20px;
`;
