import React, { useState } from "react";

const Header = ({ showSearch, recipes, setFilteredRecipes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const foundRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredRecipes(foundRecipes);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white">
      <h1 className="text-3xl font-bold tracking-wide">Reciping</h1>
      <div
        className="hidden"
        style={showSearch ? { display: "flex" } : { display: "none" }}
      >
        <input
          type="search"
          placeholder="Procurar por receitas..."
          className=" hidden rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-3 focus:yellow-500 text-black"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="hidden search-button ml-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </header>
  );
};

export default Header;
