import Axios from "axios";

const fetchRecipesByUser = async () => {
  try {
    const response = await Axios.get(
      "https://reciping-backend.onrender.com/user/661c99c8a9f771850716c5b9/recipes"
    );
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export default { fetchRecipesByUser };
