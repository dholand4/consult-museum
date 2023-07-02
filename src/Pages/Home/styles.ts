import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const AppTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;
