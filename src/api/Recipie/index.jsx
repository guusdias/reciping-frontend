import Axios from "axios";

const fetchRecipes = async () => {
  try {
    const response = await Axios.get(
      "https://reciping-backend.onrender.com/recipes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

const deleteRecipeById = async (recipeId) => {
  try {
    console.log(
      "URL da requisição DELETE:",
      `https://reciping-backend.onrender.com/recipes/${recipeId}`
    );
    const response = await Axios.delete(
      `https://reciping-backend.onrender.com/recipes/${recipeId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting recipe with ID ${recipeId}:`, error);
    throw error;
  }
};

export default { fetchRecipes, deleteRecipeById };
