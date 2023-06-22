import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #5555ff;
  color: #fff;
  border: none;
  margin-left: 10px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
