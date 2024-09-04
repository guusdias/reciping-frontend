import { useState, useEffect } from "react";
import Recipe from "../../components/Recipe";
import api from "../../api/User/index";
import CircularProgress from "@mui/material/CircularProgress";
import { RecipeRequest } from "../../types";

const MyRecipesFeed = () => {
  const [recipes, setRecipes] = useState<RecipeRequest[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIsLoading(true);
        const recipesData = await api.fetchRecipesByUser();
        setRecipes(recipesData);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getRecipes();
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
            ingredients={recipe.ingredients.toLowerCase()}
            instructions={recipe.instructions}
            img_url={recipe.img_url}
            mainIngredient={recipe.mainIngredient}
            showElipse={false}
            imgDisplay={false}
            user_name={recipe.user_name}
            user_img={recipe.user_img}
          />
        ))
      ) : (
        <div>
          Nenhuma receita encontrada. Crie sua receita{" "}
          <a href="/addRecipe" style={{ color: "blue", fontWeight: "bold" }}>
            AQUI!
          </a>
        </div>
      )}
    </div>
  );
};

export default MyRecipesFeed;
