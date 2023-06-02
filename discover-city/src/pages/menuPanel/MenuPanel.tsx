import React from 'react';
import { MenuContainer } from './MenuPanel.styles';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/discoverCity.svg';

interface Props {
  children: React.ReactNode;
}

const HomePage = ({ children }: Props) => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  };
  return (
    <div>
    <MenuContainer>
      <nav className="navbar navbar-expand-md" style={{ backgroundColor: ' #003d53', padding: '6px'}}>
        <Logo className='logo'/>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Favorites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <button onClick={handleClickLogin}>Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </MenuContainer>
    {children}
    </div>
  );
};

export default HomePage;
