import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { makeAuth } from "../../api/Auth";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData);
    try {
      const response = await makeAuth({
        email: formData.email,
        password: formData.password,
      });
      if (response.token) {
        login(response.token);
        setError(null);
        navigate("/");
      } else {
        console.log("Nenhum token retornado na autenticação.");
      }
    } catch (error) {
      setError(error.message);
      console.error("Erro durante a autenticação:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="flex w-full max-w-4l bg-white rounded-lg shadow-lg overflow-hidden h-screen">
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 items-center justify-center">
          <div className="text-white text-4xl font-bold">Welcome Back!</div>
        </div>
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center flex-col">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
            Login
          </h2>
          {error && (
            <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} method="post" className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Coloque a sua senha"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <a
                href="/register"
                className="text-sm text-indigo-500 hover:text-indigo-700"
              >
                Não tem uma conta? Clique e faça seu cadastro!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
