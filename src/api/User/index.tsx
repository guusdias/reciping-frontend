import Axios from "axios";
import { User } from "../../types/index";

const API_BASE_URL = "https://reciping-backend.onrender.com";

const storeRecipes = (recipes: any[]): void => {
  localStorage.setItem("recipes", JSON.stringify(recipes));
};

const getStoredRecipes = (): any[] => {
  const storedRecipes = localStorage.getItem("recipes");
  return storedRecipes ? JSON.parse(storedRecipes) : [];
};

const getUser = (): User | null =>
  JSON.parse(sessionStorage.getItem("user") || "null");

const fetchRecipesByUser = async (): Promise<any[]> => {
  const user = getUser();
  if (!user || !user._id) {
    console.error("Usuário não encontrado ou ID inválido.");
    return getStoredRecipes();
  }

  try {
    const response = await Axios.get(
      `${API_BASE_URL}/user/${user._id}/recipes`
    );
    const recipes = response.data.recipes;
    storeRecipes(recipes);
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return getStoredRecipes();
  }
};

const fetchAllRecipes = async (): Promise<any[]> => {
  try {
    const response = await Axios.get(`${API_BASE_URL}/user/recipes/all`);
    const recipes = response.data;
    storeRecipes(recipes);
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return getStoredRecipes();
  }
};

const registerUser = async (userData: Partial<User>): Promise<User> => {
  try {
    const newUserData = {
      ...userData,
      recipes: [],
    };
    const response = await Axios.post(`${API_BASE_URL}/user`, newUserData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw new Error("Erro ao registrar usuário.");
  }
};

const insertRecipe = async (recipeData: any): Promise<any> => {
  const user = getUser();
  if (!user || !user._id) {
    throw new Error("Usuário não encontrado ou ID inválido.");
  }

  try {
    const response = await Axios.post(
      `${API_BASE_URL}/user/${user._id}/recipes`,
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

const deleteRecipeById = async (recipeId: string): Promise<any> => {
  const user = getUser();
  if (!user) throw new Error("User not found");

  try {
    const response = await Axios.delete(
      `${API_BASE_URL}/user/${user._id}/recipes/${recipeId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting recipe with ID ${recipeId}:`, error);
    throw error;
  }
};

const updateRecipeById = async (
  recipeId: string,
  updatedRecipe: any
): Promise<any> => {
  const user = getUser();
  if (!user) throw new Error("User not found");

  try {
    const response = await Axios.put(
      `${API_BASE_URL}/user/${user._id}/recipes/${recipeId}`,
      updatedRecipe
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating recipe with ID ${recipeId}:`, error);
    throw error;
  }
};

const updateUser = async (
  userId: string,
  updatedUser: Partial<User>
): Promise<User> => {
  try {
    const response = await Axios.put(
      `${API_BASE_URL}/user/${userId}`,
      updatedUser
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
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
