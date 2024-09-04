import React from "react";
import Recipe from "../../components/Recipe";
import { useFavoriteContext } from "../../contexts/Favorite";
import { RecipeProps } from "../../types";

const Favorites: React.FC = () => {
  const { favorite } = useFavoriteContext();

  return (
    <div className="flex flex-col mt-0 gap-10 items-left shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
      <div className="favorites-recipies">
        {favorite.length > 0 ? (
          <section className="space-y-4">
            {favorite.map((fav) => {
              const recipeData: RecipeProps = {
                id: fav.id,
                title: fav.title || "No Title",
                description: fav.description || "No Description",
                ingredients: fav.ingredients || "No Ingredients",
                instructions: fav.instructions || "No Instructions",
                img_url: fav.img_url || "",
                mainIngredient: fav.mainIngredient || "",
                user_name: fav.user_name || "",
                user_img: fav.user_img || "",
                showElipse: true,
                imgDisplay: false,
              };

              return <Recipe key={fav.id} {...recipeData} />;
            })}
          </section>
        ) : (
          <div>Selecione um favorito no feed de receitas!</div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
