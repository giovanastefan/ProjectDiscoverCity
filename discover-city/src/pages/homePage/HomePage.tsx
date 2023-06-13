import { CardsContainer } from "../cardsContainer/CardsContainer";
import { Container } from "./HomePage.styles";

const HomePage = () => {
  // should call suggested establishment
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
      <CardsContainer
        itens={data}
        handleOpenModal={() => "Here is when open element"}
      />
    </Container>
  );
};

export default HomePage;
