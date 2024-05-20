import React from "react";
import ElipseMenu from "../ElipseMenu";

const Recipe = ({
  id,
  title,
  description,
  ingredients,
  instructions,
  img_url,
  mainIngredient,
}) => {
  console.log("id recebido na receita", id);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl flex flex-row justify-between">
      <div className="overflow-hidden px-7 py-4 flex items-center">
        <img
          className="rounded-lg object-none h-48 w-48"
          src={img_url}
          alt={title}
        />
      </div>
      <div className="text-left px-6 py-3 w-9/12">
        <span className="text-gray-700 text-xs bg-slate-100 p-1 border-2 border-slate-300 border-radius-10 rounded-full">
          {description}
        </span>
        <div className="font-bold text-3xl mt-4 mb-1 text-left">{title}</div>
        <div className="mt-1 text-left">
          <p className="text-gray-700 italic">{ingredients}</p>
        </div>
        <div className="mt-8 text-left">
          <p className="text-gray-700">{instructions}</p>
        </div>
        <div className="mt-8 text-left">
          <p className="text-gray-700">{mainIngredient}</p>
        </div>
      </div>
      <ElipseMenu id={id} />
    </div>
  );
};

export default Recipe;
