import { useState, useEffect } from "react";
import SearchInput from "../SearchInput/index.jsx";
import RecipeCard from "../RecipeCard/index.jsx";
import LoadingSpinner from "../LoadingSpinner/index.jsx";
import api from "../../api/User/index.jsx";

const RecipesFeed = () => {
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
        setRecipes(shuffleArray(formattedRecipes));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col mt-0 gap-10 items-left shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite o título da receita..."
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))
      ) : (
        <div>Nenhuma receita encontrada.</div>
      )}
    </div>
  );
};

export default RecipesFeed;
