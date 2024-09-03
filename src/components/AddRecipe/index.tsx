// components/AddRecipe.tsx

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { insertRecipe } from "../../api/User/index";
import { RecipeFormRefs, ApiError } from "../../types/index.tsx";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";

const AddRecipe = () => {
  const navigate = useNavigate();

  const formRefs: RecipeFormRefs = {
    title: useRef<HTMLInputElement>(null),
    ingredients: useRef<HTMLTextAreaElement>(null),
    description: useRef<HTMLTextAreaElement>(null),
    mainIngredient: useRef<HTMLInputElement>(null),
    instructions: useRef<HTMLTextAreaElement>(null),
    img_url: useRef<HTMLInputElement>(null),
  };

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      title: formRefs.title.current?.value || "",
      ingredients: formRefs.ingredients.current?.value || "",
      description: formRefs.description.current?.value || "",
      mainIngredient: formRefs.mainIngredient.current?.value || "",
      instructions: formRefs.instructions.current?.value || "",
      img_url: formRefs.img_url.current?.value || "",
    };

    setIsLoading(true);
    try {
      await insertRecipe(formData);
      navigate("/recipes");
    } catch (error) {
      const apiError = error as ApiError;
      setError(apiError.message);
      console.error("Erro ao registrar receita:", apiError);
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
            <InputField
              ref={formRefs.title}
              type="text"
              id="title"
              name="title"
              placeholder="Bolo de Cenoura"
              label="Nome da Receita"
            />
            <TextAreaField
              ref={formRefs.ingredients}
              id="ingredients"
              name="ingredients"
              placeholder="Cenoura, leite, chocolate..."
              label="Ingredientes"
              rows={2}
            />
            <InputField
              ref={formRefs.mainIngredient}
              type="text"
              id="mainIngredient"
              name="mainIngredient"
              placeholder="Cenoura"
              label="Principal Ingrediente"
            />
            <TextAreaField
              ref={formRefs.description}
              id="description"
              name="description"
              placeholder="Brasileira"
              label="Região Típica"
              rows={3}
            />
            <TextAreaField
              ref={formRefs.instructions}
              id="instructions"
              name="instructions"
              placeholder="Rale a cenoura e coloque ela dentro de um pote..."
              label="Instruções"
              rows={5}
            />
            <InputField
              ref={formRefs.img_url}
              type="text"
              id="img_url"
              name="img_url"
              placeholder="https://site.com.br/images"
              label="URL da Imagem"
            />
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
