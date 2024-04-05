import { useState, useEffect } from "react";
import Recipe from "../Recipe";
import fetchRecipes from "../../api/Recipie/index";

const RecipesFeed = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true);
        const recipesData = await fetchRecipes();
        setRecipes(recipesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    getRecipes();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div className="flex flex-col gap-10 items-left shadow-md p-10 rounded-3xl bg-slate-50">
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        recipes.map((recipe, index) => (
          <Recipe
            key={index}
            description={recipe.description}
            title={capitalizeFirstLetter(recipe.title)}
            ingredients={recipe.ingredients.toLowerCase()}
            instructions={capitalizeFirstLetter(recipe.instructions)}
            img_url={recipe.img_url}
          />
        ))
      )}
    </div>
  );
};

export default RecipesFeed;
