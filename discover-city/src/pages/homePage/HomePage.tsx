import { useEffect, useState } from "react";
import { ModalEstablishment } from "../../components/ModalEstablishment/ModalEstablishment";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import { Container } from "./HomePage.styles";
import { Establishment } from "../../types/Establishment";
import { useDispatch, useSelector } from "react-redux";
import { allEstablishmentAction } from "../../actions/establishmentAction";
import { RootState } from "../../reducers/rootReducer";

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedEstablishment, setSelectedEstablishment] =
    useState<Establishment>();
  const dispatch: any = useDispatch();

  const handleOpenModal = (establishment: Establishment) => {
    setSelectedEstablishment(establishment); 
    setOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(allEstablishmentAction());
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [dispatch]);

  const userState = useSelector((state: RootState) => state.establishmentStore);
  const { loading, establishments } = userState;

  const cards = () => {
    return (
      <>
        <ModalEstablishment
          isOpen={isOpen}
          handleClose={() => setOpen(false)}
          establishment={selectedEstablishment}
        />
        <CardsContainer
          items={establishments}
          handleOpenModal={handleOpenModal}
        />
      </>
    );
  };

  return <Container>{loading ? <h1>Loading...</h1> : cards()}</Container>;
};

export default HomePage;
