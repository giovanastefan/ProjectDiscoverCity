import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import HomePage from "./pages/homePage/HomePage";
import LoginForm from "./pages/loginPage/LoginPage";
import RegisterForm from "./pages/registerPage/RegisterPage";
import "bootstrap/dist/css/bootstrap.css";
import store from './stores/userStore';
import MenuPanel from "./pages/menuPanel/MenuPanel";
import ExplorePage from "./pages/explorePage/ExplorePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import RegisterEstablishment from "./pages/registerEstablishment/RegisterEstablishment";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
      <MenuPanel>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/registerEstablishment" element={<RegisterEstablishment />} />
        </Routes>
      </MenuPanel>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
