import styled from "styled-components";

export const ArtworkListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
  }
`;
export const LoadMoreButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
