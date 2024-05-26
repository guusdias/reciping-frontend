import Axios from "axios";

const storeRecipes = (recipes) => {
  localStorage.setItem("recipes", JSON.stringify(recipes));
};

const getStoredRecipes = () => {
  const storedRecipes = localStorage.getItem("recipes");
  if (storedRecipes) {
    return JSON.parse(storedRecipes);
  }
  return [];
};

const fetchRecipesByUser = async () => {
  try {
    //CHANGE THE ID HERE DONT FORGET
    const response = await Axios.get(
      "https://reciping-backend.onrender.com/user/661c99c8a9f771850716c5b9/recipes"
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

export default { fetchRecipesByUser, fetchAllRecipes };
