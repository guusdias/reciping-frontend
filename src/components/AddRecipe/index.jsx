import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

export default function AddRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [mainIngredient, setMainIngredient] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title: recipeName,
      description: description,
      mainIngredient: mainIngredient,
      ingredients: ingredients,
      instructions: instructions,
      img_url: imgUrl,
    };

    // Logic to send the newRecipe object to your backend (e.g., using fetch or axios)
    console.log("New Recipe:", newRecipe);
    // ... (Your logic to send data to backend)
  };

  return (
    <div className="form-container flex flex-col mt-0 gap-10 items-left shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
      <form onSubmit={handleSubmit} className="form-wrapper rounded-lg w-full">
        <h2 className="form-title text-2xl mb-5">Create Your Recipe</h2>
        <label htmlFor="recipeName" className="form-label block text-base mb-1">
          Recipe Name
        </label>
        <input
          id="recipeName"
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          className="form-input w-full sm:w-[calc(100%-32px)] border border-gray-300 rounded-md p-3 text-base mb-3"
        />
        <label
          htmlFor="ingredients"
          className="form-label block text-base mb-1"
        >
          Ingredients
        </label>
        <textarea
          id="ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="form-textarea w-full border border-gray-300 rounded-md p-3 text-base mb-3"
          rows={2}
        />
        <label
          htmlFor="mainIngredient"
          className="form-label block text-base mb-1"
        >
          Main Ingredient
        </label>
        <input
          id="mainIngredient"
          type="text"
          placeholder="Main Ingredient"
          value={mainIngredient}
          onChange={(e) => setMainIngredient(e.target.value)}
          className="form-input w-full sm:w-[calc(100%-32px)] border border-gray-300 rounded-md p-3 text-base mb-3"
        />
        <label
          htmlFor="description"
          className="form-label block text-base mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea w-full border border-gray-300 rounded-md p-3 text-base mb-3"
          rows={3}
        />
        <label
          htmlFor="instructions"
          className="form-label block text-base mb-1"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="form-textarea w-full border border-gray-300 rounded-md p-3 text-base mb-3"
          rows={5}
        />
        <label htmlFor="imgUrl" className="form-label block text-base mb-1">
          Image URL
        </label>
        <input
          id="imgUrl"
          type="text"
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          className="form-input w-full sm:w-[calc(100%-32px)] border border-gray-300 rounded-md p-3 text-base mb-3"
        />
        <button
          type="submit"
          className="form-submit bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white rounded-md px-6 py-3 text-lg cursor-pointer"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
