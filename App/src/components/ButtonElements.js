import styled from 'styled-components';

export const Button = styled.button`
  margin-top:20px;
  text-decoration: none;
  border-radius: 50px;
  background: #1f68b5;
  white-space: nowrap;
  padding: 5px 20px 10px 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  outline: none;
  border: none;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #89c0fa;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 20px 10px 20px;
    font-size: 16px ;
  }
`;