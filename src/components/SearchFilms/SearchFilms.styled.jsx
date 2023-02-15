import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 300px;
  padding: 7px;
  height: 30px;
  border-radius: 20px;
  margin-right: 10px;
  background-color: #fff;
`;

export const Button = styled.button`
  background-color: #fff;
  border: none;
  width: 100px;
  height: 30px;
  font-weight: 700;
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 5px 20px black;
    background-color: #f9ff3c;
  }
`;
