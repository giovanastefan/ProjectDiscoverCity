import { useState } from "react";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import SearchContainer from "../searchContainer/SearchContainer";
import {
  Container,
  EstablishmentContainer,
} from "./ExplorePage.styles";
import { Establishment } from "../../types/Establishment";
import { ModalEstablishment } from "../../components/ModalEstablishment/ModalEstablishment";

const ExplorePage = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedEstablishment, setSelectedEstablishment] = useState<Establishment>();
  const [searchResults, setSearchResults] = useState<Establishment[]>([]);

  const handleSearchResults = (results: Establishment[]) => {
    setSearchResults(results);
  };

  const handleOpenModal = (establishment: Establishment) => {
    setSelectedEstablishment(establishment); 
    setOpen(true);
  };

  return (
    <Container>
      <SearchContainer onSearchResults={handleSearchResults} />

      {searchResults.length > 0 ? (
        <div>
          {searchResults.length === 0 ? <h3>No establishments found!</h3> : <>
          <ModalEstablishment
            isOpen={isOpen}
            handleClose={() => setOpen(false)}
            establishment={selectedEstablishment}
          />
          <CardsContainer
            items={searchResults}
            handleOpenModal={handleOpenModal}
          />
          </>}
        </div>
      ) : null}
    </Container>
  );
};

export default ExplorePage;
