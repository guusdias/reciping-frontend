import { useState } from "react";
import "./styles.css";
import { MdAddToPhotos } from "react-icons/md";

export default function Addrecipe() {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', recipeName);
    console.log('Ingredients:', ingredients);
    console.log('Description:', description);
    console.log('Category:', category);
  };

  function imageUpload () {
    
  }


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <h2 className="form-title">Create Your Recipe</h2>
        <label htmlFor="recipeName" className="form-label">Recipe Name</label>
        <input
          id="recipeName"
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          className="form-input"
        />
        <label htmlFor="ingredients" className="form-label">Ingredients</label>
        <textarea
          id="ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="form-textarea"
          rows={2}
        />
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
          rows={3}
        />
        <label htmlFor="category" className="form-label">Category</label>
        <input
          id="category"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input"
        />
         <div className="addPhoto"><MdAddToPhotos /></div>
        <button type="submit" className="form-submit">Cadastrar</button>
      </form>
    </div>
  );
}
