import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Container } from "./ProfilePage.styles";

const ProfilePage = () => {
  const userState = useSelector((state: RootState) => state.userStore);
  const { id, email, name } = userState.user;
  return <Container>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </Container>;
};

export default ProfilePage;
