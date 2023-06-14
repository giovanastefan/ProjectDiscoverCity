
import { CardsContainer } from "../CardsContainer/CardsContainer";
import {
  Container,
  SearchContainer,
  EstablishmentContainer,
} from "./ExplorePage.styles";

const ExplorePage = () => {
  const data = [
    {
      id: 1,
      title: "Bar do Ze",
      description: "Barzinho do ze com muitas porções",
      image: "",
    },
    {
      id: 1,
      title: "Bar do Ze",
      description: "Barzinho do ze com muitas porções",
      image: "",
    },
    {
      id: 1,
      title: "Bar do Ze",
      description: "Barzinho do ze com muitas porções",
      image: "",
    },
    {
      id: 1,
      title: "Bar do Ze",
      description: "Barzinho do ze com muitas porções",
      image: "",
    },
  ];

  return (
    <Container>
      <SearchContainer>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
          />
        </div>
      </SearchContainer>
      <EstablishmentContainer>
        <p className="suggested">Maybe you like: </p>
        <CardsContainer
          itens={data}
          handleOpenModal={() => "Here is when open element"}
        />
      </EstablishmentContainer>
    </Container>
  );
};

export default ExplorePage;
