import { useState, useEffect } from "react";
import Recipe from "../Recipe";
import api from "../../api/User/index.jsx";
import CircularProgress from "@mui/material/CircularProgress";

const RecipesFeed = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await api.fetchAllRecipes();
        const formattedRecipes = response.recipes
          .filter((recipe) => recipe._doc)
          .map((recipe) => ({
            title: recipe._doc.title,
            description: recipe._doc.description,
            mainIngredient: recipe._doc.mainIngredient,
            ingredients: recipe._doc.ingredients.toLowerCase(),
            instructions: recipe._doc.instructions,
            img_url: recipe._doc.img_url,
            _id: recipe._doc._id,
          }));
        setRecipes(formattedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="flex flex-col mt-0 gap-10 items-left shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
      {isLoading ? (
        <CircularProgress />
      ) : recipes.length > 0 ? (
        recipes.map((recipe) => (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            description={recipe.description}
            title={recipe.title}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            img_url={recipe.img_url}
            mainIngredient={recipe.mainIngredient}
            showElipse={true}
          />
        ))
      ) : (
        <div>Nenhuma receita encontrada.</div>
      )}
    </div>
  );
};

export default RecipesFeed;
