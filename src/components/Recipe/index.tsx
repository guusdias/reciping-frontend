import { useRef, useState } from "react";
import ElipseMenu from "../ElipseMenu";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useFavoriteContext } from "../../contexts/Favorite";
import { useNavigate } from "react-router-dom";
import api from "../../api/User/index";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";
import Button from "../ActionButton";
import { RecipeFormRefs, RecipeProps } from "../../types";

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
}: RecipeProps) => {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const navigate = useNavigate();
  const Icon = isFavorite ? GoHeartFill : GoHeart;

  const [isEditing, setIsEditing] = useState(false);

  const formRefs: RecipeFormRefs = {
    title: useRef<HTMLInputElement>(null),
    description: useRef<HTMLTextAreaElement>(null),
    ingredients: useRef<HTMLTextAreaElement>(null),
    instructions: useRef<HTMLTextAreaElement>(null),
    img_url: useRef<HTMLInputElement>(null),
    mainIngredient: useRef<HTMLInputElement>(null),
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const updatedRecipe = {
      title: formRefs.title.current?.value || title,
      description: formRefs.description.current?.value || description,
      ingredients: formRefs.ingredients.current?.value || ingredients,
      instructions: formRefs.instructions.current?.value || instructions,
      img_url: formRefs.img_url.current?.value || img_url,
      mainIngredient: formRefs.mainIngredient.current?.value || mainIngredient,
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
            <InputField
              type="text"
              id="imgUrl"
              name="imgUrl"
              placeholder="Image URL"
              label="Image URL"
              ref={formRefs.img_url}
              defaultValue={img_url}
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
              <TextAreaField
                id="description"
                name="description"
                placeholder="Description"
                label="Description"
                ref={formRefs.description}
                defaultValue={description}
              />
              <InputField
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                label="Title"
                ref={formRefs.title}
                defaultValue={title}
              />
              <TextAreaField
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                label="Ingredients"
                ref={formRefs.ingredients}
                defaultValue={ingredients}
              />
              <TextAreaField
                id="instructions"
                name="instructions"
                placeholder="Instructions"
                label="Instructions"
                ref={formRefs.instructions}
                defaultValue={instructions}
              />
              <InputField
                type="text"
                id="mainIngredient"
                name="mainIngredient"
                placeholder="Main Ingredient"
                label="Main Ingredient"
                ref={formRefs.mainIngredient}
                defaultValue={mainIngredient}
              />
              <div className="flex space-x-4">
                <Button
                  className="py-2 px-4 bg-orange-500 text-white border-2  border-orange-500 font-medium rounded-md hover:bg-orange-600"
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
                <Button
                  className="py-2 px-4 bg-white text-orange-500 border-2 border-orange-500 font-medium rounded-md hover:bg-gray-100"
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
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
