import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../../api/User/index";

const Register = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    user_img:
      "https://carijosartesanato.com.br/wp-content/uploads/elementor/thumbs/Placeholder-Avatar-User-Fallback-pvqp224ve5uwf3b7fd4ka5dyo8pcirivpbfs0xavpc.png",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { user_name, email, password, confirmPassword, user_img } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const newUser = { user_name, email, password, user_img, recipes: [] };
      const data = await registerUser(newUser);
      setError("");
      navigate("/login");
    } catch (error) {
      console.error("Failed to register user:", error);
      setError("Falha ao registrar o usuário. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center w-full bg-gray-100 h-screen">
      <div className="flex w-full bg-white rounded-lg shadow-lg overflow-hidden h-screen">
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 items-center justify-center">
          <div className="text-white text-4xl font-bold">
            Criar uma nova conta
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center flex-col">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
            Coloque seus dados
          </h2>
          {error && (
            <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome de Usuário
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Nome de Usuário"
              />
            </div>
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
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Coloque a sua senha"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center mt-5 px-4 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirme a Senha
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirme a sua senha"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center mt-5 px-4 text-gray-500 focus:outline-none"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Criar Conta
              </button>
            </div>
            <div className="text-center mt-4">
              <a
                href="/login"
                className="text-sm text-indigo-500 hover:text-indigo-700"
              >
                Já tem conta? Faça seu login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
