import Menu from '../menuPanel/MenuPanel';
import { useSelector } from "react-redux";
import { RootState } from '../../reducers/rootReducer';

const HomePage = () => {
    const userState = useSelector((state: RootState) => state.userStore);
    const { id, email } = userState.user;

    return (
        <Menu>
            <h1>Ola mundo</h1>
            home vai ser aqui!!
            <p>{email}</p>
        </Menu>
    );
}

export default HomePage;
