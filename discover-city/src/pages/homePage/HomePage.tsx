import React from 'react';
import { MenuContainer } from './HomePage.styles';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  };
  return (
    <MenuContainer>
      <nav className="navbar navbar-expand-md" style={{ backgroundColor: ' #ffd11a', padding: '6px'}}>
        <a className="navbar-brand" href="/">
          Logo
        </a>
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
  );
};

export default HomePage;
