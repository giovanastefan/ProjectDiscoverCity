import axios from 'axios';
import { useEffect, useState } from "react";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import { Container } from "./FavoritesPage.styles";
import { Establishment } from "../../types/Establishment";
import { ModalEstablishment } from "../../components/ModalEstablishment/ModalEstablishment";
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';

const API_URL = 'http://localhost:8080';

const FavoritesPage = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedEstablishment, setSelectedEstablishment] = useState<Establishment>();
  const [favorites, setFavorites] = useState<Establishment[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(true); // Add loading state
  const userState = useSelector((state: RootState) => state.userStore);
  const { id } = userState.user;

  const handleOpenModal = (establishment: Establishment) => {
    setSelectedEstablishment(establishment); 
    setOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/user/${id}/favorites`);
        setFavorites(response.data);
        setLoading(false); 
      } catch (error: any) {
        setError('An error occurred while getting favorites.');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const renderFavorites = () => {
    if (isLoading) {
      return <h3>Loading...</h3>;
    } else if (error) {
      return <h3>{error}</h3>;
    } else if (favorites.length === 0) {
      return <h3>No favorites found.</h3>;
    } else {
      return (
        <>
          <h3>Favorites</h3>
          <ModalEstablishment
            isOpen={isOpen}
            handleClose={() => setOpen(false)}
            establishment={selectedEstablishment}
          />
          <CardsContainer
            items={favorites}
            handleOpenModal={handleOpenModal}
          />
        </>
      );
    }
  }

  return (
    <Container>
      {id ? renderFavorites() : <h3>Login or create an account to add favorites.</h3>}
    </Container>
  );
};

export default FavoritesPage;
