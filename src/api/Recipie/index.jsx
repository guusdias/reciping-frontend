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

export default fetchRecipes;
