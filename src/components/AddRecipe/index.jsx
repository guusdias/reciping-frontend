import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

export default function Addrecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", recipeName);
    console.log("Ingredients:", ingredients);
    console.log("Description:", description);
    console.log("Category:", category);
  };

  return (
    <div className="form-container flex justify-center items-center h-10">
      <form
        onSubmit={handleSubmit}
        className="form-wrapper bg-white shadow-md rounded-lg p-10 w-[600px]"
      >
        <h2 className="form-title text-2xl mb-5">Create Your Recipe</h2>
        <label htmlFor="recipeName" className="form-label block text-base mb-2">
          Recipe Name
        </label>
        <input
          id="recipeName"
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          className="form-input w-full sm:w-[calc(100%-32px)] border border-gray-300 rounded-md p-4 text-base mb-5"
        />
        <label htmlFor="ingredients" className="form-label">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="form-textarea w-full border border-gray-300 rounded-md p-4 text-base mb-5"
          rows={2}
        />
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea w-full border border-gray-300 rounded-md p-4 text-base mb-5"
          rows={3}
        />
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          id="category"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input w-full sm:w-[calc(100%-32px)] border border-gray-300 rounded-md p-4 text-base mb-5"
        />
        <div className="addPhot text-black rounded-md px-6 py-3 text-lg cursor-pointer mt-[-10px] mb-[10px]">
          <MdAddToPhotos />
        </div>
        <button
          type="submit"
          className="form-submit bg-blue-500 text-white rounded-md px-6 py-3 text-lg cursor-pointer"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
