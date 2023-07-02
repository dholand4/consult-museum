import React from "react";
import { SearchResult } from "../../Services/api";
import {
  Artist,
  ArtworkArtist,
  ArtworkImage,
  ArtworkItemContainer,
  ArtworkTitle,
  FavoriteButton,
  ImagePlaceholder,
  EmptyMessage,
  ArtworkPublic,
  ArtworkLine,
  Line,
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
      <ArtworkTitle>{title}</ArtworkTitle>
      <ArtworkArtist>
        Artista:
        {artistDisplayName ? (
          <Artist>{artistDisplayName}</Artist>
        ) : (
          <EmptyMessage>Desconhecido</EmptyMessage>
        )}
      </ArtworkArtist>
      <ArtworkLine>
        Localização: <Line>{creditLine}</Line>
      </ArtworkLine>
      <ArtworkPublic>
        {artwork.publicDomain ? "Domínio Público" : "Não é de Domínio Público"}
      </ArtworkPublic>

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
