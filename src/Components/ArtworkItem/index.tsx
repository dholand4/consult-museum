import React from "react";
import { SearchResult } from "../../Services/api";
import {
  ArtworkImage,
  ArtworkItemContainer,
  ArtworkText,
  ArtworkText1,
  ArtworkTitle,
  FavoriteButton,
  ImagePlaceholder,
} from "./styles";

export interface ArtworkItemProps {
  artwork: SearchResult;
  onFavorite: (artwork: SearchResult) => void;
  onUnfavorite: (artwork: SearchResult) => void;
  isFavorite: boolean;
}

const ArtworkItem: React.FC<ArtworkItemProps> = ({
  artwork,
  onFavorite,
  onUnfavorite,
  isFavorite,
}) => {
  const { title, artistDisplayName, primaryImage, creditLine } = artwork;

  const handleFavorite = () => {
    onFavorite(artwork);
  };

  const handleUnfavorite = () => {
    onUnfavorite(artwork);
  };

  return (
    <ArtworkItemContainer>
      {primaryImage ? (
        <ArtworkImage src={primaryImage} alt={title} />
      ) : (
        <ImagePlaceholder>Imagem não disponível</ImagePlaceholder>
      )}
      <ArtworkTitle>Titulo: {title}</ArtworkTitle>
      <ArtworkText1>Artista: {artistDisplayName}</ArtworkText1>
      <ArtworkText>Localização: {creditLine}</ArtworkText>
      <ArtworkText>
        {artwork.publicDomain ? "Domínio Público" : "Não é de Domínio Público"}
      </ArtworkText>

      <FavoriteButton
        onClick={isFavorite ? handleUnfavorite : handleFavorite}
        className={isFavorite ? "remove-favorite" : ""}
      >
        {isFavorite ? "Desfavoritar" : "Favoritar"}
      </FavoriteButton>
    </ArtworkItemContainer>
  );
};

export default ArtworkItem;
