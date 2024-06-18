import React, { useState } from 'react';

export default function Header({ recipes, setFilteredRecipes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const foundRecipe = recipes.find(recipe =>
      recipe.title.toLowerCase() === searchTerm.toLowerCase()
    );

    setFilteredRecipes(foundRecipe ? [foundRecipe] : []);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold tracking-wide">Reciping</h1>
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Search Recipes"
          className="rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="ml-4 bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-800"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </header>
  );
}
