import React from "react";
import { MenuContainer } from "./MenuPanel.styles";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/discoverCity.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";

interface Props {
  children: React.ReactNode;
}

const HomePage = ({ children }: Props) => {
  const navigate = useNavigate();
  const userState = useSelector((state: RootState) => state.userStore);
  const { id } = userState.user;

  const handleClickProfile = () => {
    navigate("/profile");
  }

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickExplore = () => {
    navigate("/explore");
  };

  const handleClickFavorites = () => {
    navigate("/favorites");
  };

  const handleClickHome = () => {
    navigate("/");
  };
  return (
    <div>
      <MenuContainer>
        <nav
          className="navbar navbar-expand-md"
          style={{ backgroundColor: " #003d53", padding: "6px" }}
        >
          <Logo className="logo" />
          <h3 className="title">DiscoverCity</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" onClick={handleClickHome}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleClickFavorites}>Favorites</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleClickExplore}>
                  Explore
                </a>
              </li>
              {id ? (
                <li className="nav-item">
                  <button onClick={handleClickProfile}>Profile</button>
                </li>
              ) : (
                <li className="nav-item">
                  <button onClick={handleClickLogin}>Login</button>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </MenuContainer>
      {children}
    </div>
  );
};

export default HomePage;
