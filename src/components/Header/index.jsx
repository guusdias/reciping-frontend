import React, { useState } from "react";

export default function Header({ recipes, setFilteredRecipes, showSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const foundRecipe = recipes.find(
      (recipe) => recipe.title.toLowerCase() === searchTerm.toLowerCase()
    );

    setFilteredRecipes(foundRecipe ? [foundRecipe] : []);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold tracking-wide">Reciping</h1>
      <div
        className="flex items-center"
        style={showSearch ? { display: "flex" } : { display: "none" }}
      >
        <input
          type="search"
          placeholder="Procurar por receitas..."
          className="rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="search-button ml-4 bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-800"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </header>
  );
}
