import React, { useState } from "react";
import { createUser } from "../../services/RegisterUser";
import { MainContainer } from "./RegisterPage.styles";

interface User {
  name: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    createUser(user);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <MainContainer className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="w-50">
        {/*Logo should be here*/}
        <div className="title">Register</div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
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
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </MainContainer>
  );
};

export default RegisterForm;
