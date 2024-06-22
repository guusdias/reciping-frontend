import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { makeAuth } from "../../api/Auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div className="flex w-full bg-white rounded-lg shadow-lg overflow-hidden h-screen">
        <div className="md:flex md:w-1/2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 items-center justify-center flex-col">
          <img
            className="w-2/6"
            src="https://raw.githubusercontent.com/guusdias/reciping-frontend/master/src/assets/livro.png"
            alt="img_book"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center flex-col">
          <h3 className="text-orange-500 text-4xl font-bold mb-10">
            Bem-vindo ao Reciping!
          </h3>
          <h3 className="text-3xl font-semibold text-center text-gray-400 mb-6">
            Faça seu login
          </h3>
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
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="seu@email.com"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Coloque a sua senha"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center mt-6 pr-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white font-medium rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <a
                href="/register"
                className="text-sm text-orange-500 hover:text-orange-700"
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
