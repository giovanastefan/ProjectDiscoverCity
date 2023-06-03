import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import HomePage from "./pages/homePage/HomePage";
import LoginForm from "./pages/loginPage/LoginPage";
import RegisterForm from "./pages/registerPage/RegisterPage";
import "bootstrap/dist/css/bootstrap.css";
import store from './stores/userStore';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
