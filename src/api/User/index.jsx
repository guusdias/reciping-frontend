import Axios from "axios";

const storeRecipes = (recipes) => {
  localStorage.setItem("recipes", JSON.stringify(recipes));
};

const getStoredRecipes = () => {
  const storedRecipes = localStorage.getItem("recipes");
  return storedRecipes ? JSON.parse(storedRecipes) : [];
};

const getUser = () => JSON.parse(sessionStorage.getItem("user"));

const fetchRecipesByUser = async () => {
  const user = getUser();

  if (!user || !user.id) {
    console.error("Usuário não encontrado ou ID inválido.");
    return getStoredRecipes();
  }

  try {
    const response = await Axios.get(
      `https://reciping-backend.onrender.com/user/${user.id}/recipes`
    );
    const recipes = response.data.recipes;
    storeRecipes(recipes);
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return getStoredRecipes();
  }
};

const fetchAllRecipes = async () => {
  try {
    const response = await Axios.get(
      "https://reciping-backend.onrender.com/user/recipes/all"
    );
    const recipes = response.data;
    storeRecipes(recipes);
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return getStoredRecipes();
  }
};

export const registerUser = async (userData) => {
  try {
    const newUserData = {
      ...userData,
      recipes: [],
    };
    const response = await Axios.post(
      "https://reciping-backend.onrender.com/user",
      newUserData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw new Error("Erro ao registrar usuário.");
  }
};

export const insertRecipe = async (userData) => {
  const user = getUser();
  if (!user || !user.id) {
    throw new Error("Usuário não encontrado ou ID inválido.");
  }

  try {
    const recipeData = { ...userData };
    const response = await Axios.post(
      `https://reciping-backend.onrender.com/user/${user.id}/recipes`,
      recipeData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao inserir receita:", error);
    throw new Error("Erro ao inserir receita.");
  }
};

const deleteRecipeById = async (recipeId) => {
  const user = getUser();

  try {
    const response = await Axios.delete(
      `https://reciping-backend.onrender.com/user/${user.id}/recipes/${recipeId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting recipe with ID ${recipeId}:`, error);
    throw error;
  }
};

const updateRecipeById = async (recipeId, updatedRecipe) => {
  const user = getUser();

  try {
    const response = await Axios.put(
      `https://reciping-backend.onrender.com/user/${user.id}/recipes/${recipeId}`,
      updatedRecipe
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating recipe with ID ${recipeId}:`, error);
    throw error;
  }
};

const updateUser = async (recipeId, updatedUser) => {
  const user = getUser();

  try {
    const response = await Axios.put(
      `https://reciping-backend.onrender.com/user/${user.id}`,
      updatedUser
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating recipe with ID ${recipeId}:`, error);
    throw error;
  }
};

export default {
  fetchRecipesByUser,
  fetchAllRecipes,
  registerUser,
  insertRecipe,
  deleteRecipeById,
  updateRecipeById,
  updateUser,
};
