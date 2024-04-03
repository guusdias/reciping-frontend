import React from "react";

const Recipe = ({ title, description, ingredients, instructions, img_url }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl flex flex-row justify-around">
      <div className="overflow-hidden px-7 py-4 flex items-center">
        <img
          className="rounded-lg object-none h-48 w-90"
          src={img_url}
          alt={title}
        />
      </div>
      <div className="px-6 py-3">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Ingredientes:</h2>
          <p className="text-gray-700">{ingredients}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Instruções:</h2>
          <p className="text-gray-700">{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
