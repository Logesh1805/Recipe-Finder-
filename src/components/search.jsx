import { useState } from "react";

function Search({ onSearch }) {
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients, diet);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Enter ingredients (eg: chicken, rice)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <select onChange={(e) => setDiet(e.target.value)}>
        <option value="">All</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten free">Gluten Free</option>
      </select>

      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
