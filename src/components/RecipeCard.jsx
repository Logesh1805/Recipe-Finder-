function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <a
        href={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`}
        target="_blank"
        rel="noreferrer"
      >
        View Recipe
      </a>
    </div>
  );
}

export default RecipeCard;
