import React from "react";
import Recipe from "../Recipe";

const RecipeCard = ({ recipe }) => (
  <Recipe
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
);

export default RecipeCard;
