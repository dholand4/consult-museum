import styled from "styled-components";

const media = {
  mobile: "@media (max-width: 768px)",
};

export const ArtworkItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  min-height: 200px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

export const ArtworkImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto 10px;
  border: 1px solid black;
  border-radius: 10px;

  ${media.mobile} {
    width: 60px;
    height: 60px;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  background-color: #f5f5f5;
  border: 1px solid black;
  border-radius: 10px;
  color: #999999;
  text-align: center;

  ${media.mobile} {
    width: 60px;
    height: 60px;
    font-size: 10px;
  }
`;

export const ArtworkTitle = styled.h3`
  font-size: 14.5px;
  margin: 0 auto;
  text-align: center;
  height: 35px;

  ${media.mobile} {
    font-size: 10px;
    height: 10px;
  }
`;

export const ArtworkArtist = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin: 0;

  ${media.mobile} {
    font-size: 10px;
  }
`;

export const Artist = styled.p`
  font-size: 15px;
  text-align: left;
  margin: 0;
  height: 50px;

  ${media.mobile} {
    height: 30px;
    font-size: 10px;
  }
`;

export const ArtworkLine = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;

  ${media.mobile} {
    font-size: 10px;
  }
`;

export const Line = styled.p`
  font-size: 15px;
  /* text-align: justify; */
  margin: 0;
  height: 120px;

  ${media.mobile} {
    height: 100px;
    font-size: 10px;
  }
`;

export const ArtworkPublic = styled.p`
  font-size: 13px;
  text-align: justify;
  font-weight: bold;
  margin: 0 auto 10px;

  ${media.mobile} {
    font-size: 7.5px;
    margin-bottom: 5px;
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
  margin: 0 auto;

  &.remove-favorite {
    background-color: #ff0000;
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const EmptyMessage = styled.p`
  font-size: 15px;
  text-align: left;
  margin: 0;
  color: #000;
  height: 50px;

  ${media.mobile} {
    font-size: 12px;
    height: 30px;
  }
`;
