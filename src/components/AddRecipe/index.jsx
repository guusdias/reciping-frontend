import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { insertRecipe } from "../../api/User/index";

const AddRecipe = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    description: "",
    mainIngredient: "",
    instructions: "",
    img_url: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await insertRecipe(formData);
      navigate("/recipes");
    } catch (error) {
      setError(error.message);
      console.error("Erro ao registrar receita:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center rounded-3xl bg-gray-100 h-full w-full">
      <div className="flex flex-col mt-0 gap-10 items-left shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
        <div className="p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-center text-orange-600 mb-6">
            Adicione Sua Receita!
          </h2>
          {error && (
            <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Nome da Receita
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Bolo de Cenoura"
              />
            </div>
            <div>
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium text-gray-700"
              >
                Ingredientes
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Cenoura, leite, chocolate..."
                rows={2}
              />
            </div>
            <div>
              <label
                htmlFor="mainIngredient"
                className="block text-sm font-medium text-gray-700"
              >
                Principal Ingrediente
              </label>
              <input
                type="text"
                id="mainIngredient"
                name="mainIngredient"
                value={formData.mainIngredient}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Cenoura"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Região Típica
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Brasileira"
                rows={3}
              />
            </div>
            <div>
              <label
                htmlFor="instructions"
                className="block text-sm font-medium text-gray-700"
              >
                Instruções
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Rale a cenoura e coloque ela dentro de um pote..."
                rows={5}
              />
            </div>
            <div>
              <label
                htmlFor="img_url"
                className="block text-sm font-medium text-gray-700"
              >
                URL da Imagem
              </label>
              <input
                type="text"
                id="img_url"
                name="img_url"
                value={formData.img_url}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="https://site.com.br/images"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="py-2 px-4 bg-yellow-500 text-white font-medium rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:orange-500"
                disabled={isLoading}
              >
                {isLoading ? "Carregando..." : "Cadastrar Receita"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
