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
