import React from "react";
import { SearchResult } from "../../Services/api";

import ArtworkItem from "../ArtworkItem/index";
import { ArtworkListContainer, LoadMoreButton } from "./styles";

interface ArtworkListProps {
  artworks: SearchResult[];
  onArtworkClick: (artwork: SearchResult) => Promise<void>;
  onFavorite: (artwork: SearchResult) => void;
  onUnfavorite: (artwork: SearchResult) => void;
  favorites: Set<string>;
}

const ArtworkList: React.FC<ArtworkListProps> = ({
  artworks,
  onArtworkClick,
  onFavorite,
  onUnfavorite,
  favorites,
}) => {
  return (
    <ArtworkListContainer>
      {artworks.map((artwork) => (
        <ArtworkItem
          key={artwork.objectID}
          artwork={artwork}
          onFavorite={onFavorite}
          onUnfavorite={onUnfavorite}
          isFavorite={favorites.has(artwork.objectID.toString())}
        />
      ))}
    </ArtworkListContainer>
  );
};

export default ArtworkList;
