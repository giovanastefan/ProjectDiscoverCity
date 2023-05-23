import React, { useState } from "react";
import axios from "axios";
import { createUser } from "../../services/RegisterUser";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    axios.post("http://localhost:8080/usuario", user);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Registrando..." : "Registrar"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default RegisterForm;
