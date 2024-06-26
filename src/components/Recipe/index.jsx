import React, { useState } from "react";
import ElipseMenu from "../ElipseMenu";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useFavoriteContext } from "../../contexts/Favorite";
import { useNavigate } from "react-router-dom";
import api from "../../api/User/index.jsx";

const Recipe = ({
  id,
  title,
  description,
  ingredients,
  instructions,
  img_url,
  mainIngredient,
  user_name,
  user_img,
  showElipse,
  imgDisplay,
}) => {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const navigate = useNavigate();
  const Icon = isFavorite ? GoHeartFill : GoHeart;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedIngredients, setEditedIngredients] = useState(ingredients);
  const [editedInstructions, setEditedInstructions] = useState(instructions);
  const [editedMainIngredient, setEditedMainIngredient] =
    useState(mainIngredient);
  const [editedImgUrl, setEditedImgUrl] = useState(img_url);

  const originalState = {
    title,
    description,
    ingredients,
    instructions,
    mainIngredient,
    img_url,
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const updatedRecipe = {
      title: editedTitle,
      description: editedDescription,
      ingredients: editedIngredients,
      instructions: editedInstructions,
      mainIngredient: editedMainIngredient,
      img_url: editedImgUrl,
    };

    try {
      await api.updateRecipeById(id, updatedRecipe);
      setIsEditing(false);
      navigate("/feed");
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  const handleCancelClick = () => {
    setEditedTitle(originalState.title);
    setEditedDescription(originalState.description);
    setEditedIngredients(originalState.ingredients);
    setEditedInstructions(originalState.instructions);
    setEditedMainIngredient(originalState.mainIngredient);
    setEditedImgUrl(originalState.img_url);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl flex flex-col justify-between">
      {imgDisplay && (
        <div className="flex items-center mt-5 ml-7">
          <img
            src={user_img}
            alt="User Photo"
            className="w-10 h-10 rounded-full mr-4"
          />
          <span className="font-medium">{user_name}</span>
        </div>
      )}
      <div className="flex">
        <div className="overflow-hidden px-7 py-4 flex items-center">
          {isEditing ? (
            <input
              type="text"
              className="rounded-lg object-cover h-48 w-48"
              value={editedImgUrl}
              onChange={(e) => setEditedImgUrl(e.target.value)}
              placeholder="Image URL"
            />
          ) : (
            <img
              className="rounded-lg object-cover h-48 w-48"
              src={img_url}
              alt={title}
            />
          )}
        </div>
        <div className="text-left px-6 py-3 w-9/12">
          {isEditing ? (
            <>
              <input
                type="text"
                className="text-gray-700 text-xs bg-slate-100 p-1 border-2 border-slate-300 rounded-full w-full"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                placeholder="Description"
              />
              <div>
                <input
                  type="text"
                  className="font-bold text-3xl mt-4 mb-1 text-left w-full"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  placeholder="Title"
                />
              </div>
              <div className="mt-1 text-left">
                <textarea
                  className="text-gray-700 italic w-full"
                  value={editedIngredients}
                  onChange={(e) => setEditedIngredients(e.target.value)}
                  placeholder="Ingredients"
                />
              </div>
              <div className="mt-8 text-left">
                <textarea
                  className="text-gray-700 w-full"
                  value={editedInstructions}
                  onChange={(e) => setEditedInstructions(e.target.value)}
                  placeholder="Instructions"
                />
              </div>
              <div className="mt-8 text-left">
                <textarea
                  className="text-gray-700 w-full hidden"
                  value={editedMainIngredient}
                  onChange={(e) => setEditedMainIngredient(e.target.value)}
                  placeholder="Main Ingredient"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  className="py-2 px-4 bg-orange-500 text-white border-2  border-orange-500 font-medium rounded-md hover:bg-orange-600  hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onClick={handleSaveClick}
                >
                  Salvar
                </button>
                <button
                  className="py-2 px-4 bg-white text-orange-500 border-2 border-orange-500 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={handleCancelClick}
                >
                  Cancelar
                </button>
              </div>
            </>
          ) : (
            <>
              <span className="text-gray-700 text-xs bg-slate-100 p-1 border-2 border-slate-300 rounded-full">
                {description}
              </span>
              <div className="font-bold text-3xl mt-4 mb-1 text-left">
                {title}
              </div>
              <div className="mt-1 text-left">
                <p className="text-gray-700 italic">{ingredients}</p>
              </div>
              <div className="mt-8 text-left">
                <p className="text-gray-700">{instructions}</p>
              </div>
              <div className="mt-8 text-left hidden">
                <p className="text-gray-700">{mainIngredient}</p>
              </div>
            </>
          )}
        </div>
        {!showElipse && <ElipseMenu id={id} onEdit={handleEditClick} />}
        <div
          className="text-black"
          style={{ marginRight: "20px", marginTop: "17px", fontSize: "17px" }}
          onClick={() => {
            addFavorite({
              id,
              title,
              description,
              ingredients,
              instructions,
              img_url,
              mainIngredient,
            });
          }}
        >
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
