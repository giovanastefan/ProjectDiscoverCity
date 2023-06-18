import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Container } from "./ProfilePage.styles";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const userState = useSelector((state: RootState) => state.userStore);
  const { email, name } = userState.user;

  const handleClickRegister = () => {
    navigate('/registerEstablishment');
  }

  return <Container>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <button onClick={handleClickRegister}>Register establishment</button>
  </Container>;
};

export default ProfilePage;
