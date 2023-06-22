import React, { useState } from "react";

import SearchForm from "../../Components/Search";
import ArtworkList from "../../Components/ArtworkList";
import {
  ObjectDetails,
  SearchResult,
  getObjectDetails,
  searchObjectsByKeyword,
} from "../../Services/api";
import { AppContainer, AppTitle } from "./styles";

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<
    ObjectDetails | undefined
  >(undefined);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleSearch = async (keyword: string) => {
    const results = await searchObjectsByKeyword(keyword);
    setSearchResults(results || []);
    setSelectedArtwork(undefined);
  };

  const handleArtworkClick = async (artwork: SearchResult) => {
    const details = await getObjectDetails(artwork.objectID);
    setSelectedArtwork(details);
  };

  const handleFavorite = (artwork: SearchResult) => {
    setFavorites((prevFavorites) =>
      new Set(prevFavorites).add(artwork.objectID.toString())
    );
  };

  const handleUnfavorite = (artwork: SearchResult) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);
      updatedFavorites.delete(artwork.objectID.toString());
      return updatedFavorites;
    });
  };

  return (
    <AppContainer>
      <AppTitle>Obras de Arte do Museu Metropolitano de Arte</AppTitle>
      <SearchForm onSearch={handleSearch} />
      <ArtworkList
        artworks={searchResults}
        onArtworkClick={handleArtworkClick}
        onFavorite={handleFavorite}
        onUnfavorite={handleUnfavorite}
        favorites={favorites}
      />
    </AppContainer>
  );
};

export default App;
