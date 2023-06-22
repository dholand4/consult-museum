import styled from "styled-components";

export const ArtworkItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const ArtworkImage = styled.img`
  width: 150px;
  height: 150px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #999999;
  margin-top: auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ArtworkTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ArtworkText1 = styled.p`
  font-size: 14px;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ArtworkText = styled.p`
  font-size: 14px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const FavoriteButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #00ff00;
  color: black;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &.remove-favorite {
    background-color: #ff0000;
    color: white;
  }

  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
