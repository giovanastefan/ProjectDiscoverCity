import React, { useState } from "react";
import { MainContainer, LoginContainer } from "./LoginPage.styles";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../services/Login";
import { ReactComponent as Logo } from '../../assets/discoverCity.svg';


interface UserLogin {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    loginUser(user);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClickRegister = () => {
    navigate('/register');
  };

  return (
    <MainContainer className="d-flex justify-content-center align-items-center vh-100">
      <LoginContainer>
      <form onSubmit={handleSubmit} className="w-50">
        <Logo />
        <div className="title">Login</div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <div onClick={handleClickRegister} className="register-button">Not register yet? Click here</div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      </LoginContainer>
    </MainContainer>
  );
};

export default LoginForm;
