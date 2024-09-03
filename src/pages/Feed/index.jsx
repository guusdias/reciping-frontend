import { useState, useEffect } from "react";
import Recipe from "../../components/Recipe";
import api from "../../api/User/index.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import shuffledArray from "../../helpers/getShuffeldArray.ts";

const Feed = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await api.fetchAllRecipes();
        const formattedRecipes = response.recipes
          .filter((recipe) => recipe._doc)
          .map((recipe) => ({
            user_img: recipe.$__parent.user_img,
            user_name: recipe.$__parent.user_name,
            title: recipe._doc.title,
            description: recipe._doc.description,
            mainIngredient: recipe._doc.mainIngredient,
            ingredients: recipe._doc.ingredients.toLowerCase(),
            instructions: recipe._doc.instructions,
            img_url: recipe._doc.img_url,
            _id: recipe._doc._id,
          }));
        setRecipes(shuffledArray(formattedRecipes));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col mt-0 gap-10 items-left shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
      <div className="mb-1 flex flex-col gap-2">
        <label
          htmlFor="recipeSearch"
          className="mr-2 font-bold text-lg focus:ring-orange-500 focus:border-orange-500"
        >
          Buscar receita:
        </label>
        <input
          type="text"
          id="recipeSearch"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite o título da receita..."
          className="p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      {isLoading ? (
        <CircularProgress />
      ) : filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <Recipe
            key={recipe._id}
            id={recipe._id}
            user_name={recipe.user_name}
            user_img={recipe.user_img}
            description={recipe.description}
            title={recipe.title}
            ingredients={recipe.ingredients.toLowerCase()}
            instructions={recipe.instructions}
            img_url={recipe.img_url}
            mainIngredient={recipe.mainIngredient}
            showElipse={true}
            imgDisplay={true}
          />
        ))
      ) : (
        <div>Nenhuma receita encontrada.</div>
      )}
    </div>
  );
};

export default Feed;
