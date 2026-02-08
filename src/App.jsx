import { useState } from "react";
import Search from "./components/search";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (ingredients, diet) => {
    const API_KEY = "f78cb5458ec14838bd643107d45ddce8";

    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${ingredients}&diet=${diet}&number=12&apiKey=${API_KEY}`
    );
    const data = await res.json();
    setRecipes(data.results);
  };

  return (
    <div className="app">
      <h1>🍴 Recipe Finder</h1>
      <Search onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
