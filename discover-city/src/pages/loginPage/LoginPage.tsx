import React, { useState } from "react";
import { MainContainer } from "./LoginPage.styles";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../services/Login";

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
      <form onSubmit={handleSubmit} className="w-50">
        {/*Logo should be here*/}
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
        <div>Not register yet? Click here</div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button className="btn btn-primary" onClick={handleClickRegister}>
          Register
        </button>
      </form>
    </MainContainer>
  );
};

export default LoginForm;
