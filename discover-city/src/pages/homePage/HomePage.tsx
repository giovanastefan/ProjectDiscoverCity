import Menu from '../menuPanel/MenuPanel';
import { useSelector } from "react-redux";
import { RootState } from '../../reducers/rootReducer';
import { CardsContainer } from '../CardsContainer/CardsContainer';

const HomePage = () => {
    const userState = useSelector((state: RootState) => state.userStore);
    const { id, email } = userState.user;

    // should call suggested establishment
    const data = [
        {
            id: 1,
            title: 'Bar do Ze',
            description: 'Barzinho do ze com muitas porções',
            image: ''
        },
        {
            id: 1,
            title: 'Bar do Ze',
            description: 'Barzinho do ze com muitas porções',
            image: ''
        },
        {
            id: 1,
            title: 'Bar do Ze',
            description: 'Barzinho do ze com muitas porções',
            image: ''
        },
        {
            id: 1,
            title: 'Bar do Ze',
            description: 'Barzinho do ze com muitas porções',
            image: ''
        },
        {
            id: 1,
            title: 'Bar do Ze',
            description: 'Barzinho do ze com muitas porções',
            image: ''
        },
        {
            id: 1,
            title: 'Bar do Ze',
            description: 'Barzinho do ze com muitas porções',
            image: ''
        },
        {
            id: 1,
            title: 'Bar do Ze',
            description: 'Barzinho do ze com muitas porções',
            image: ''
        },
        {
            id: 1,
            title: 'Bar do Ze',
            description: 'Barzinho do ze com muitas porções',
            image: ''
        }
    ]

    return (
        <Menu>
            <CardsContainer itens={data} handleOpenModal={() => "Here is when open element"} />
        </Menu>
    );
}

export default HomePage;
