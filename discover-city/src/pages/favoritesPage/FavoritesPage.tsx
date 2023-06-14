import { CardsContainer } from "../CardsContainer/CardsContainer";
import { Container } from "./FavoritesPage.styles";

const FavoritesPage = () => {
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

  return <Container>
    <h3>Favorites</h3>
    <CardsContainer itens={data} handleOpenModal={() => "Ok"} />
  </Container>;
};

export default FavoritesPage;









