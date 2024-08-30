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
    </header>
  );
};

export default Header;
