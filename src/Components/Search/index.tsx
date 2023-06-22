import React, { useState } from "react";
import { SearchButton, SearchFormContainer, SearchInput } from "./styles";

interface SearchFormProps {
  onSearch: (keyword: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(keyword);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Pesquisar"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <SearchButton type="submit">Buscar</SearchButton>
    </SearchFormContainer>
  );
};

export default SearchForm;
